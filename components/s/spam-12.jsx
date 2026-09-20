import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9hu57n-u.css';
import '../../css/o/oll-isblm.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="h9hu57n-u"/><path clip-rule="evenodd" class="oll-isblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:spam-12"} {...others} />);
}

export default Component;
