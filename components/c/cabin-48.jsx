import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgzdi_vdo.css';
import '../../css/w/wfeynzbws.css';
import '../../css/r/rg22j5bgu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qgzdi_vdo"/><path class="wfeynzbws"/><path class="rg22j5bgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cabin-48"} {...others} />);
}

export default Component;
