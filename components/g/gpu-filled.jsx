import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkeen_bhs.css';
import '../../css/f/f583e5b1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jkeen_bhs"/><path clip-rule="evenodd" class="f583e5b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gpu-filled"} {...others} />);
}

export default Component;
