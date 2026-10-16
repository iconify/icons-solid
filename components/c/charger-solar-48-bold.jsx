import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zro89qjwt.css';
import '../../css/v/vwrn1bbgu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zro89qjwt"/><path class="vwrn1bbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-solar-48-bold"} {...others} />);
}

export default Component;
