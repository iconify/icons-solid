import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ehzunbwiz.css';
import '../../css/t/t6zjrrb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ehzunbwiz"/><path class="t6zjrrb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-wifi5"} {...others} />);
}

export default Component;
