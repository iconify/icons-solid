import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcanjw_pl.css';
import '../../css/w/wx8v4gq2k.css';
import '../../css/z/zrbbkmbeu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wcanjw_pl"/><path class="wx8v4gq2k"/><path class="zrbbkmbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vector-pen-48"} {...others} />);
}

export default Component;
