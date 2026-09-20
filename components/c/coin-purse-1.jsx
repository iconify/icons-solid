import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fblvo_b-x.css';
import '../../css/t/tchp3hbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fblvo_b-x"/><path class="tchp3hbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coin-purse-1"} {...others} />);
}

export default Component;
