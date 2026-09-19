import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7v76fbki.css';
import '../../css/u/u-3l03b-a.css';
import '../../css/s/skd9ipjko.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z7v76fbki"/><path class="u-3l03b-a"/><path class="skd9ipjko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:hospital"} {...others} />);
}

export default Component;
