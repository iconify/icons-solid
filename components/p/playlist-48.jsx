import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd9chqbvs.css';
import '../../css/j/jz9dkbbxs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sd9chqbvs"/><path class="jz9dkbbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:playlist-48"} {...others} />);
}

export default Component;
