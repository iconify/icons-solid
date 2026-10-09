import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kscmlob8u.css';
import '../../css/y/yynh_dbio.css';
import '../../css/n/nu071yljs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kscmlob8u"/><path class="yynh_dbio"/><path class="nu071yljs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transformer-pole-48"} {...others} />);
}

export default Component;
