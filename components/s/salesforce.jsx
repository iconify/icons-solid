import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjam85b1s.css';
import '../../css/w/wuycig-pg.css';
import '../../css/v/v6x11jg6c.css';

const viewBox = {"width":999,"height":699.242,"left":0.5,"top":0.5};
const content = `<path class="rjam85b1s"/><path class="wuycig-pg"/><path class="v6x11jg6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:salesforce"} {...others} />);
}

export default Component;
