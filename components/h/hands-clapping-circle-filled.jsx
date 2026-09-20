import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/t/tganbebhi.css';
import '../../css/l/l6gdv6u4l.css';
import '../../css/o/oibplp75r.css';
import '../../css/g/g9_g5bfes.css';
import '../../css/u/uxh3gebzd.css';
import '../../css/q/q5gp961vc.css';
import '../../css/v/v-f-uuber.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG3G4KJckF"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="tganbebhi"/><path class="l6gdv6u4l"/><path class="oibplp75r"/><path class="g9_g5bfes"/><path class="uxh3gebzd"/><path class="q5gp961vc"/><path class="v-f-uuber"/></g></mask></defs><circle mask="url(#SVG3G4KJckF)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hands-clapping-circle-filled"} {...others} />);
}

export default Component;
