import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlyur0l4y.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="mlyur0l4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:sublimtext"} {...others} />);
}

export default Component;
