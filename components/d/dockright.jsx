import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl6wf-b3i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sl6wf-b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:dockright"} {...others} />);
}

export default Component;
