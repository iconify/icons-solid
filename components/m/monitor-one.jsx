import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g57d7ra_n.css';
import '../../css/w/w2n9sq4-n.css';
import '../../css/j/jcjzhubjm.css';
import '../../css/z/zqs1pywbv.css';
import '../../css/v/v3dqhubcd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmTL0qcou"><g class="ft5dv1b6b"><path class="g57d7ra_n"/><path class="w2n9sq4-n"/><path class="jcjzhubjm"/><circle class="zqs1pywbv"/><path class="v3dqhubcd"/></g></mask></defs><path mask="url(#SVGmTL0qcou)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:monitor-one"} {...others} />);
}

export default Component;
