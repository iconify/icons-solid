import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpmy4gbbe.css';
import '../../css/j/jvc_et25k.css';
import '../../css/o/omsosyx3j.css';
import '../../css/e/e1i4n8hvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpmy4gbbe wm-a"/><path class="jvc_et25k wm-k"/><path class="omsosyx3j wm-k"/><path class="e1i4n8hvz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:headset"} {...others} />);
}

export default Component;
