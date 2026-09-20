import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le4ktn-ax.css';
import '../../css/q/qfz352b-c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="le4ktn-ax"/><path class="qfz352b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-stopwatch"} {...others} />);
}

export default Component;
