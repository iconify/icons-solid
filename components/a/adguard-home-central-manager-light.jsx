import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/algf38bxk.css';
import '../../css/b/b-jujfljh.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGRIzbSbuD" x1="18.6" x2="534.7" y1="-27.8" y2="488.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGRIzbSbuD)" class="algf38bxk"/><path class="b-jujfljh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adguard-home-central-manager-light"} {...others} />);
}

export default Component;
