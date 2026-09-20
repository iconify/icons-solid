import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2aw66r3l.css';
import '../../css/w/wvsyf7maw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l2aw66r3l"/><path clip-rule="evenodd" class="wvsyf7maw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:plus-circle-24"} {...others} />);
}

export default Component;
