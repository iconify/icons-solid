import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hu0___bzk.css';
import '../../css/q/q0ugzngzb.css';
import '../../css/s/staoijb6t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGz8BPDc2k"><g class="ft5dv1b6b"><rect class="hu0___bzk"/><path clip-rule="evenodd" class="q0ugzngzb"/><path class="staoijb6t"/></g></mask></defs><path mask="url(#SVGz8BPDc2k)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:equal-ratio"} {...others} />);
}

export default Component;
