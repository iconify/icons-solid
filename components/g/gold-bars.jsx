import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d61aq9b1d.css';
import '../../css/f/fla-hqb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d61aq9b1d"/><path class="fla-hqb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gold-bars"} {...others} />);
}

export default Component;
