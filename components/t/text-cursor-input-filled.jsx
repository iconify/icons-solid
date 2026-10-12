import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1p6d7jyb.css';
import '../../css/x/xiad0yblv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1p6d7jyb"/><path class="xiad0yblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:text-cursor-input-filled"} {...others} />);
}

export default Component;
