import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpz9ytm9t.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="qpz9ytm9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:icicles"} {...others} />);
}

export default Component;
