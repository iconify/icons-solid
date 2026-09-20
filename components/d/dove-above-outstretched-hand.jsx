import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d625uvbwr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d625uvbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dove-above-outstretched-hand"} {...others} />);
}

export default Component;
