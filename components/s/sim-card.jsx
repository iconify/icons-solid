import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4dtn20jx.css';
import '../../css/c/cri_ujbvz.css';
import '../../css/e/e-a_x1nrp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGC8tD5dTb"><g class="ft5dv1b6b"><path class="e4dtn20jx"/><circle class="cri_ujbvz"/><path class="e-a_x1nrp"/></g></mask></defs><path mask="url(#SVGC8tD5dTb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sim-card"} {...others} />);
}

export default Component;
