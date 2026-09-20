import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln2cx2igb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ln2cx2igb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:scissors-solid"} {...others} />);
}

export default Component;
