import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v6u0s-b6v.css';
import '../../css/b/b2wq-2kdm.css';
import '../../css/e/eetq4kbnf.css';
import '../../css/j/j5_c5z0qq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v6u0s-b6v"/><path class="b2wq-2kdm"/><path class="eetq4kbnf"/><path class="j5_c5z0qq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-music-linear"} {...others} />);
}

export default Component;
