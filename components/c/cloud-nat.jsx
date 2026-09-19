import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3t-q0_bj.css';
import '../../css/g/gzhvap6lb.css';
import '../../css/r/rrgcllb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3t-q0_bj"/><path class="gzhvap6lb"/><path class="rrgcllb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-nat"} {...others} />);
}

export default Component;
