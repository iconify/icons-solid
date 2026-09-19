import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0ku6lcmx.css';
import '../../css/l/lruer8ufr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o0ku6lcmx"/><path class="lruer8ufr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-unstructured"} {...others} />);
}

export default Component;
