import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it-6mlbhr.css';
import '../../css/b/bckx04b0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="it-6mlbhr"/><path clip-rule="evenodd" class="bckx04b0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backpack-outline"} {...others} />);
}

export default Component;
