import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz-knsbvd.css';
import '../../css/u/umxpd67pc.css';
import '../../css/u/usgxssb2k.css';
import '../../css/r/rnrvi0mga.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vz-knsbvd"/><path class="umxpd67pc"/><path class="usgxssb2k"/><path class="rnrvi0mga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-snowflake-48-bold"} {...others} />);
}

export default Component;
