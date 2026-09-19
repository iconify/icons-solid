import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxmas2bmc.css';
import '../../css/u/u9olyabjd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cxmas2bmc"/><path class="u9olyabjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-audio"} {...others} />);
}

export default Component;
