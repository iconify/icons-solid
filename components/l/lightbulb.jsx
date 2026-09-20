import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfuz5s9ob.css';
import '../../css/q/q8fvfdcmr.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="xfuz5s9ob"/><path class="q8fvfdcmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:lightbulb"} {...others} />);
}

export default Component;
