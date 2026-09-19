import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au_he4sgw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="au_he4sgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chat-left-dots-fill"} {...others} />);
}

export default Component;
