import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu7ancbnv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu7ancbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tooltip-cellphone"} {...others} />);
}

export default Component;
