import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/x/xxb39ebcb.css';
import '../../css/k/kd4u92b_f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTrITfcYr"><g class="hv130ab-t"><path clip-rule="evenodd" class="xxb39ebcb"/><path class="kd4u92b_f"/></g></mask></defs><path mask="url(#SVGTrITfcYr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:inner-shadow-down"} {...others} />);
}

export default Component;
