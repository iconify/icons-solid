import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a23qezmoi.css';
import '../../css/h/hokkqjb4r.css';
import '../../css/d/dy4drqbor.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a23qezmoi"/><path class="hokkqjb4r"/><path class="dy4drqbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-station-48"} {...others} />);
}

export default Component;
