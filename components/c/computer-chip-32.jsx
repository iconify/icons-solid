import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zx62dabaj.css';
import '../../css/j/j5qsj4bjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zx62dabaj"/><path class="j5qsj4bjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:computer-chip-32"} {...others} />);
}

export default Component;
