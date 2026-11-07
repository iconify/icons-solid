import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/out_eubyp.css';
import '../../css/w/wh1vxda8i.css';
import '../../css/u/u4zxjwj4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="out_eubyp"/><path class="wh1vxda8i"/><path class="u4zxjwj4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:xxx-bold"} {...others} />);
}

export default Component;
