import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oegrs6bql.css';
import '../../css/e/e5hbpvfpw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oegrs6bql"/><path class="e5hbpvfpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-tax-48"} {...others} />);
}

export default Component;
