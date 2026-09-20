import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jam089b_t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="jam089b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:screen-curve-solid"} {...others} />);
}

export default Component;
