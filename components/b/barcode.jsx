import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hynd_kb9n.css';
import '../../css/n/ni0f_pbls.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hynd_kb9n"/><path class="ni0f_pbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:barcode"} {...others} />);
}

export default Component;
