import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_kcb60rm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="i_kcb60rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:watch-circle-charging-solid"} {...others} />);
}

export default Component;
