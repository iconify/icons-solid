import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc5zs_rrj.css';
import '../../css/d/da75vnbxo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vc5zs_rrj"/><path class="da75vnbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:star"} {...others} />);
}

export default Component;
