import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxwi8fcof.css';
import '../../css/x/xy9vhf6wf.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="bxwi8fcof"/><path class="xy9vhf6wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:gift-solid"} {...others} />);
}

export default Component;
