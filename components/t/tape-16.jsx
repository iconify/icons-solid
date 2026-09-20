import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsv0algms.css';
import '../../css/i/i3h9pj49l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hsv0algms"/><path clip-rule="evenodd" class="i3h9pj49l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:tape-16"} {...others} />);
}

export default Component;
