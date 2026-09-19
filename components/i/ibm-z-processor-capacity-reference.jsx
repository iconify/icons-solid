import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8dna0b9r.css';
import '../../css/h/hgwl5bclr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l8dna0b9r"/><path class="hgwl5bclr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-z-processor-capacity-reference"} {...others} />);
}

export default Component;
