import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oegrs6bql.css';
import '../../css/o/o7hd-nb0p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oegrs6bql"/><path class="o7hd-nb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electricity-bill-48"} {...others} />);
}

export default Component;
