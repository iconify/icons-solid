import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rf6ic284x.css';
import '../../css/w/w6w67kbba.css';
import '../../css/k/kf2846bit.css';
import '../../css/o/ohbu8jsry.css';
import '../../css/g/gamp7_p1r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbt5SmbRn"><g class="s9cl3zbei"><path clip-rule="evenodd" class="rf6ic284x"/><path class="w6w67kbba"/><path class="kf2846bit"/><path class="ohbu8jsry"/><path class="gamp7_p1r"/></g></mask></defs><path mask="url(#SVGbt5SmbRn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pesticide"} {...others} />);
}

export default Component;
