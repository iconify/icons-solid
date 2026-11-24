import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgooogbsq.css';
import '../../css/d/d0-_7mw1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dgooogbsq"/><path class="d0-_7mw1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pizza-filled"} {...others} />);
}

export default Component;
