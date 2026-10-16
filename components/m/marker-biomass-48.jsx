import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9v855hut.css';
import '../../css/f/f8ufb-bbb.css';
import '../../css/g/gb1zcob1n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9v855hut"/><path class="f8ufb-bbb"/><path class="gb1zcob1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-biomass-48"} {...others} />);
}

export default Component;
