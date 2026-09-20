import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4v7vnbfb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t4v7vnbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:file-explorer-dark"} {...others} />);
}

export default Component;
