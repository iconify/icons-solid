import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1-dclb0l.css';
import '../../css/n/nuuqustnb.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="t1-dclb0l"/><path class="nuuqustnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:data-search-filled"} {...others} />);
}

export default Component;
