import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lso3-hbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lso3-hbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:chart-areaspline"} {...others} />);
}

export default Component;
