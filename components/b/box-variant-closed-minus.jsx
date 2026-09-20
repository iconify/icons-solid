import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uymz8obqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uymz8obqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:box-variant-closed-minus"} {...others} />);
}

export default Component;
