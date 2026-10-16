import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da8ahcs8d.css';
import '../../css/f/fhiwyn5qd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="da8ahcs8d"/><path class="fhiwyn5qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:subscript-48"} {...others} />);
}

export default Component;
