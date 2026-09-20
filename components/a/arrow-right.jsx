import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3vt5_b4x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z3vt5_b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:arrow-right"} {...others} />);
}

export default Component;
