import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mqu1w7ben.css';
import '../../css/n/n3t34zbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mqu1w7ben"/><path class="n3t34zbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-woman-book"} {...others} />);
}

export default Component;
