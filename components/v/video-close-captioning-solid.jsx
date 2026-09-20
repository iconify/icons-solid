import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im2df2dro.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="im2df2dro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:video-close-captioning-solid"} {...others} />);
}

export default Component;
