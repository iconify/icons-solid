import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgtr2_73j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jgtr2_73j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:shape-intersect"} {...others} />);
}

export default Component;
