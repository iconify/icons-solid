import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b22cvxy9q.css';
import '../../css/s/sea5vybym.css';
import '../../css/r/raype-70g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b22cvxy9q"/><path class="sea5vybym"/><path class="raype-70g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tips"} {...others} />);
}

export default Component;
