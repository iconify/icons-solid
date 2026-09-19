import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rtc-krb_h.css';
import '../../css/v/vk7dmbbsu.css';
import '../../css/w/wwt414u4a.css';
import '../../css/g/g209tp_em.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="rtc-krb_h"/><path class="vk7dmbbsu"/><path class="wwt414u4a"/><path class="g209tp_em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-pap"} {...others} />);
}

export default Component;
