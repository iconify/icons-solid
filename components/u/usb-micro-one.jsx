import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gryxzxflf.css';
import '../../css/u/ul9nsubgu.css';
import '../../css/z/z4ogcpbvg.css';
import '../../css/h/hkjegtuup.css';
import '../../css/x/x8tsbo1ef.css';
import '../../css/i/ihj-b8s3h.css';
import '../../css/z/zc-pzfuus.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="gryxzxflf"/><path class="ul9nsubgu"/><path class="z4ogcpbvg"/><path class="hkjegtuup"/><path class="x8tsbo1ef"/><path class="ihj-b8s3h"/><path class="zc-pzfuus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:usb-micro-one"} {...others} />);
}

export default Component;
