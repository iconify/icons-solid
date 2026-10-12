import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d43t32b4m.css';
import '../../css/y/y6ixysbct.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d43t32b4m"/><path class="y6ixysbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:book-contacts-stroke-20"} {...others} />);
}

export default Component;
