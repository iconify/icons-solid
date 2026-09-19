import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuwikiitw.css';
import '../../css/f/f7t-e2bsi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nuwikiitw"/><path class="f7t-e2bsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flow-stream"} {...others} />);
}

export default Component;
