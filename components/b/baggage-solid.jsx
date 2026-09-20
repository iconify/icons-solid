import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fji8a4b_r.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fji8a4b_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:baggage-solid"} {...others} />);
}

export default Component;
