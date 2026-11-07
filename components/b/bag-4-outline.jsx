import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td855uyua.css';
import '../../css/x/x6t1awols.css';
import '../../css/d/d0nccrbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td855uyua"/><path class="x6t1awols"/><path clip-rule="evenodd" class="d0nccrbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-4-outline"} {...others} />);
}

export default Component;
