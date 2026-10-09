import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veqbv0b0t.css';
import '../../css/a/agesaqbzs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="veqbv0b0t"/><path class="agesaqbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-48"} {...others} />);
}

export default Component;
