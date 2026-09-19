import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo07tbb9o.css';
import '../../css/j/jgmlxzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo07tbb9o"/><path class="jgmlxzbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-left-circle-half"} {...others} />);
}

export default Component;
