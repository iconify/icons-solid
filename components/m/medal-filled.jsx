import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0qfuhvsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e0qfuhvsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:medal-filled"} {...others} />);
}

export default Component;
