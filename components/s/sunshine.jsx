import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx_kaouwn.css';
import '../../css/v/vd-f58bld.css';
import '../../css/w/wqm03x8_d.css';
import '../../css/w/w6rqdqpvm.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="mx_kaouwn"/><path class="vd-f58bld"/><path class="wqm03x8_d"/><path class="w6rqdqpvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sunshine"} {...others} />);
}

export default Component;
