import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/h/hcl8-eb4f.css';
import '../../css/s/sx5ndllwv.css';
import '../../css/f/fcfq5abke.css';
import '../../css/b/b4yu45byb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="hcl8-eb4f"/><path class="sx5ndllwv"/><path class="fcfq5abke"/><path class="b4yu45byb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:all-application"} {...others} />);
}

export default Component;
