import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l11z416ub.css';
import '../../css/t/twzfc7dpg.css';
import '../../css/k/k287uf_wt.css';
import '../../css/i/iwjrb3bnb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l11z416ub"/><path class="twzfc7dpg"/><path class="k287uf_wt"/><path class="iwjrb3bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eight-pointed-star"} {...others} />);
}

export default Component;
