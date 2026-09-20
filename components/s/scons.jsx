import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9g4-upkk.css';
import '../../css/o/o4kdtcbtb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i9g4-upkk"/><path class="o4kdtcbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:scons"} {...others} />);
}

export default Component;
