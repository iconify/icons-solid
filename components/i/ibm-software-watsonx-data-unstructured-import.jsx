import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyz1-gphb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cyz1-gphb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-software-watsonx-data-unstructured-import"} {...others} />);
}

export default Component;
