import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhuk8-b5y.css';
import '../../css/u/u8bmg4bmi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lhuk8-b5y"/><path class="u8bmg4bmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:deforestation-20-bold"} {...others} />);
}

export default Component;
