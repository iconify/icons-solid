import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odolrmbaa.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="odolrmbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:satellite-dish-bold"} {...others} />);
}

export default Component;
