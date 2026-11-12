import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6515jepd.css';
import '../../css/c/c97n50bhy.css';
import '../../css/z/z1zkdbgsi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w6515jepd"/><path class="c97n50bhy"/><path class="z1zkdbgsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-lumo-dark"} {...others} />);
}

export default Component;
