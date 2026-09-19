import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbijc7bgs.css';
import '../../css/d/dukr1cmfl.css';
import '../../css/s/sh-gg_h6o.css';
import '../../css/u/ulhnd1a7l.css';
import '../../css/v/vld1wfbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cbijc7bgs"/><circle class="dukr1cmfl"/><circle class="sh-gg_h6o"/><circle class="ulhnd1a7l"/><circle class="vld1wfbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:bandage"} {...others} />);
}

export default Component;
