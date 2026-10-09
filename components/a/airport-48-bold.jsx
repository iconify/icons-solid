import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa81hmtbv.css';
import '../../css/i/ik6s6dbfj.css';
import '../../css/n/n3iczmbsl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aa81hmtbv"/><path class="ik6s6dbfj"/><path class="n3iczmbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airport-48-bold"} {...others} />);
}

export default Component;
