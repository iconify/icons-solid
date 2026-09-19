import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pd4lkrbca.css';
import '../../css/h/hjoc0hbzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="pd4lkrbca"/><path class="hjoc0hbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:greater-than-square"} {...others} />);
}

export default Component;
