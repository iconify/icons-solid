import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7kxz4bcm.css';
import '../../css/s/s_li2rbdk.css';
import '../../css/e/ekadmhbkq.css';
import '../../css/m/murceqb_x.css';
import '../../css/g/gh24vr2wu.css';
import '../../css/b/bnk8qecef.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r7kxz4bcm"/><circle class="s_li2rbdk"/><circle class="ekadmhbkq"/><circle class="murceqb_x"/><path class="gh24vr2wu"/><path class="bnk8qecef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bear"} {...others} />);
}

export default Component;
