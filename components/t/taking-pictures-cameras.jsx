import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uzikshbpy.css';
import '../../css/o/odt--5g8d.css';
import '../../css/e/eyr02rbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uzikshbpy"/><path class="odt--5g8d"/><path class="eyr02rbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:taking-pictures-cameras"} {...others} />);
}

export default Component;
