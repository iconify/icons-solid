import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqvhlrz8x.css';
import '../../css/n/n646pccoh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dqvhlrz8x"/><path class="n646pccoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:checklist"} {...others} />);
}

export default Component;
