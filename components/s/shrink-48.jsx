import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agcsd6j3i.css';
import '../../css/r/rps7bbcge.css';
import '../../css/n/nrn2j2qgp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="agcsd6j3i"/><path class="rps7bbcge"/><path class="nrn2j2qgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shrink-48"} {...others} />);
}

export default Component;
