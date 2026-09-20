import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m14lmibdm.css';

const viewBox = {"width":1411,"height":1557};
const content = `<path class="m14lmibdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ubs-etracs-dark"} {...others} />);
}

export default Component;
