import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjhyc3iad.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hjhyc3iad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:cardano"} {...others} />);
}

export default Component;
