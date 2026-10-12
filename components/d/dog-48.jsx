import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4_-hv4ce.css';
import '../../css/c/cty3yck3a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t4_-hv4ce"/><path class="cty3yck3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dog-48"} {...others} />);
}

export default Component;
