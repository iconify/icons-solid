import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce-k3acqk.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ce-k3acqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:discussion-converstion-reply-flat"} {...others} />);
}

export default Component;
