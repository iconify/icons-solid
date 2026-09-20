import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m7of0hbqk.css';
import '../../css/k/klhdv0ueo.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(2 3)" class="bi12bsetm"><path class="m7of0hbqk"/><circle class="klhdv0ueo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:gauge"} {...others} />);
}

export default Component;
