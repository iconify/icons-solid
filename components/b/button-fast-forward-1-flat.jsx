import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rps_n-b1u.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="rps_n-b1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:button-fast-forward-1-flat"} {...others} />);
}

export default Component;
