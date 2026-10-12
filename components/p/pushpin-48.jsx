import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf93xsbmn.css';
import '../../css/k/kjf3iqboc.css';
import '../../css/f/fmo52ol9d.css';
import '../../css/t/t2smvv9rt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pf93xsbmn"/><path class="kjf3iqboc"/><path class="fmo52ol9d"/><path class="t2smvv9rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pushpin-48"} {...others} />);
}

export default Component;
