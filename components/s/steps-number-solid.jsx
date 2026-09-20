import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vig41oomx.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="vig41oomx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:steps-number-solid"} {...others} />);
}

export default Component;
