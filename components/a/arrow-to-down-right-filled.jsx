import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_5qqfbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j_5qqfbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-to-down-right-filled"} {...others} />);
}

export default Component;
