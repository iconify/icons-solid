import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z477j3bdr.css';
import '../../css/g/gno1t7swb.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="z477j3bdr"/><path class="gno1t7swb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:trash-bin"} {...others} />);
}

export default Component;
