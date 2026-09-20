import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey4o1_bee.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ey4o1_bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bank-minus"} {...others} />);
}

export default Component;
