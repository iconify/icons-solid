import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhxs1y3oh.css';
import '../../css/h/hvw76hbuq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uhxs1y3oh"/><path class="hvw76hbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:script"} {...others} />);
}

export default Component;
