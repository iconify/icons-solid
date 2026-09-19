import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-wjut1hm.css';
import '../../css/z/zyi_swbah.css';
import '../../css/l/lurcrpbpr.css';
import '../../css/f/f599xkbpj.css';
import '../../css/y/y3n5ew-kq.css';
import '../../css/s/sdtgrrbdg.css';
import '../../css/a/aza2b6v_c.css';
import '../../css/r/rlk90acht.css';
import '../../css/w/wml_9-bie.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="p-wjut1hm"/><path class="zyi_swbah"/><path class="lurcrpbpr"/><path class="f599xkbpj"/><path class="y3n5ew-kq"/><path class="sdtgrrbdg"/><path class="aza2b6v_c"/><path class="rlk90acht"/><path class="wml_9-bie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:baby-dark"} {...others} />);
}

export default Component;
