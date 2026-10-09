import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcp2pkb_d.css';
import '../../css/a/acu1a62dn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gcp2pkb_d"/><path class="acu1a62dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pallet-48"} {...others} />);
}

export default Component;
