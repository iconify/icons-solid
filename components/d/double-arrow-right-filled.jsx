import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws20coc9l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ws20coc9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:double-arrow-right-filled"} {...others} />);
}

export default Component;
