import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j-g8ijvcl.css';
import '../../css/u/uvd7bo9co.css';
import '../../css/e/enjbkqf-z.css';
import '../../css/r/r9mao2buo.css';
import '../../css/n/nnz17rb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="j-g8ijvcl"/><path class="uvd7bo9co"/><path class="enjbkqf-z"/><path class="r9mao2buo"/><path class="nnz17rb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:food-app"} {...others} />);
}

export default Component;
