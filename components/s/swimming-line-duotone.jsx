import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bcqjjkohj.css';
import '../../css/n/n71b4nzut.css';
import '../../css/u/uoxjs6bit.css';
import '../../css/i/in-q1r46k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bcqjjkohj"/><path class="n71b4nzut"/><path class="uoxjs6bit"/><path class="in-q1r46k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-line-duotone"} {...others} />);
}

export default Component;
