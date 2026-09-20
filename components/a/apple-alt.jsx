import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0x_rfbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0x_rfbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:apple-alt"} {...others} />);
}

export default Component;
