import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5b4wqbaq.css';
import '../../css/s/st1b0k75a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q5b4wqbaq"/><path class="st1b0k75a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-price-48"} {...others} />);
}

export default Component;
