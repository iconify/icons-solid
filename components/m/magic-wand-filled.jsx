import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cowqw2bkl.css';
import '../../css/k/knoj0abei.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cowqw2bkl"/><path class="knoj0abei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:magic-wand-filled"} {...others} />);
}

export default Component;
