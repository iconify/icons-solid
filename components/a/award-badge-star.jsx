import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dsinquy4n.css';
import '../../css/f/facr_4rzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dsinquy4n"/><path class="facr_4rzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:award-badge-star"} {...others} />);
}

export default Component;
