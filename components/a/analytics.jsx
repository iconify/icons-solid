import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxh_o_bia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxh_o_bia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:analytics"} {...others} />);
}

export default Component;
