import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xub8gacdz.css';

const viewBox = {"width":0,"height":0,"left":-28.989,"top":-29};
const content = `<path class="xub8gacdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:logitech-g"} {...others} />);
}

export default Component;
