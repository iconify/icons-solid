import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nch3szbem.css';
import '../../css/d/d6mnshidp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nch3szbem"/><path class="d6mnshidp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watson-query"} {...others} />);
}

export default Component;
