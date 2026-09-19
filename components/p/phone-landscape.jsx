import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x50z2w0vt.css';
import '../../css/u/ujlm800om.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVG5mxdJbfR" class="x50z2w0vt"/></defs><use href="#SVG5mxdJbfR"/><path class="ujlm800om"/><use href="#SVG5mxdJbfR"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:phone-landscape"} {...others} />);
}

export default Component;
