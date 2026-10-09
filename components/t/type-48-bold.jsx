import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kemulyb_r.css';
import '../../css/x/x-e0pwbux.css';
import '../../css/d/dnwvp9oef.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kemulyb_r"/><path class="x-e0pwbux"/><path class="dnwvp9oef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:type-48-bold"} {...others} />);
}

export default Component;
