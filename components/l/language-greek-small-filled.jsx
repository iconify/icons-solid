import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxo_xnd6q.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="wxo_xnd6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:language-greek-small-filled"} {...others} />);
}

export default Component;
