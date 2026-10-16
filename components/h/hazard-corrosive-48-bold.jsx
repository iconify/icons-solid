import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2mjsubix.css';
import '../../css/a/a_eufztoa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2mjsubix"/><path class="a_eufztoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-corrosive-48-bold"} {...others} />);
}

export default Component;
