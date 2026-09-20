import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwszy3bem.css';
import '../../css/o/ovjr3gbvd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="dwszy3bem"/><path class="ovjr3gbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:woodwind-16"} {...others} />);
}

export default Component;
