import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi44tcbwh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oi44tcbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:close"} {...others} />);
}

export default Component;
