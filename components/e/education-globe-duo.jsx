import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/a/apmp40b6o.css';
import '../../css/h/hnnhofbct.css';
import '../../css/s/serc4t1iq.css';
import '../../css/q/qs-vlocmu.css';
import '../../css/i/inxwgmbln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="apmp40b6o"/><path class="hnnhofbct"/><path class="serc4t1iq"/><path class="qs-vlocmu"/><path class="inxwgmbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:education-globe-duo"} {...others} />);
}

export default Component;
