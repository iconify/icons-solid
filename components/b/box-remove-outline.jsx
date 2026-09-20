import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwtfi1jsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwtfi1jsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:box-remove-outline"} {...others} />);
}

export default Component;
