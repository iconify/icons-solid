import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqza1ubtx.css';
import '../../css/u/uezcagbky.css';
import '../../css/e/e9wi6tbab.css';
import '../../css/q/q4olcgcmy.css';
import '../../css/v/vmlg40b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqza1ubtx"/><path class="uezcagbky"/><path class="e9wi6tbab"/><path class="q4olcgcmy"/><path class="vmlg40b9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:traffic-director"} {...others} />);
}

export default Component;
