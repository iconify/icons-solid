import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5u55absk.css';
import '../../css/q/qvuh0pbfm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s5u55absk"/><path class="qvuh0pbfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-straight-filled"} {...others} />);
}

export default Component;
