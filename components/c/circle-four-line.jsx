import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asfn5lk4k.css';
import '../../css/i/igjto1rli.css';
import '../../css/e/edx263bbt.css';
import '../../css/w/wazb7-b6w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZYFZ5bDn"><g class="ft5dv1b6b"><path class="asfn5lk4k"/><path class="igjto1rli"/><path clip-rule="evenodd" class="edx263bbt"/><path class="wazb7-b6w"/></g></mask></defs><path mask="url(#SVGZYFZ5bDn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:circle-four-line"} {...others} />);
}

export default Component;
