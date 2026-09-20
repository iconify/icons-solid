import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4-u_bchg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q4-u_bchg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cloud-phone-exchange"} {...others} />);
}

export default Component;
