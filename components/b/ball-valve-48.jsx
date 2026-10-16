import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omiylpb6q.css';
import '../../css/c/c95t47bmk.css';
import '../../css/i/i-ild10ah.css';
import '../../css/f/fj4vt1kml.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="omiylpb6q"/><path class="c95t47bmk"/><path class="i-ild10ah"/><path class="fj4vt1kml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ball-valve-48"} {...others} />);
}

export default Component;
