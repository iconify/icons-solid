import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad2pn_1bn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ad2pn_1bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-software-watsonx-data-structured-import"} {...others} />);
}

export default Component;
