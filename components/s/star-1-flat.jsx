import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7s5fm7lq.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="k7s5fm7lq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:star-1-flat"} {...others} />);
}

export default Component;
