import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtou26beu.css';
import '../../css/z/z7zwqlbjj.css';
import '../../css/u/ut284ibch.css';
import '../../css/t/tcyyloujp.css';
import '../../css/x/x2g41ebpb.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGjjnCDeJI" x1="-100.025" x2="63.845" y1="430.485" y2="430.485" gradientTransform="matrix(2.8346 0 0 -2.8346 307.283 1458.452)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xtou26beu"/><stop offset="1" class="z7zwqlbjj"/></linearGradient><path fill="url(#SVGjjnCDeJI)" class="ut284ibch"/><path class="tcyyloujp"/><path class="x2g41ebpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:myheats"} {...others} />);
}

export default Component;
