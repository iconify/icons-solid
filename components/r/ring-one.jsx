import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/e10y7tc3x.css';
import '../../css/m/mfsd7w07b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGo59oLpeP"><g class="v3_i3wktz"><path class="e10y7tc3x"/><path class="mfsd7w07b"/></g></mask></defs><path mask="url(#SVGo59oLpeP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ring-one"} {...others} />);
}

export default Component;
