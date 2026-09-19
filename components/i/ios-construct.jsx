import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghk0ryb3g.css';
import '../../css/f/f-em3h96r.css';
import '../../css/f/fjfsszbfp.css';
import '../../css/i/i050vtjae.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ghk0ryb3g"/><path class="f-em3h96r"/><path class="fjfsszbfp"/><path class="i050vtjae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-construct"} {...others} />);
}

export default Component;
