import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2qt-w.css';
import '../../css/w/wtwpul.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-66.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2qt-w"/><path class="wtwpul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:star-alt-filled-right-half"} {...others} />);
}

export default Component;
