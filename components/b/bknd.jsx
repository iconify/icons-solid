import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgdewob5q.css';
import '../../css/u/uuvbm1wfx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qgdewob5q"/><path class="uuvbm1wfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bknd"} {...others} />);
}

export default Component;
