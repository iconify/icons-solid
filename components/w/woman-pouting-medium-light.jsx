import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-6enjbgb.css';
import '../../css/n/nh-fsmbcu.css';
import '../../css/v/v0tzu806k.css';
import '../../css/s/s5kcc4byv.css';
import '../../css/q/qecvpjb3m.css';
import '../../css/t/tt6s6mbsj.css';
import '../../css/n/nxlhx2b8i.css';
import '../../css/a/akjmrtbjh.css';
import '../../css/u/u6vchxbou.css';
import '../../css/d/dzwroi3aa.css';
import '../../css/m/m-ebzh5nt.css';
import '../../css/j/jtvguybqy.css';
import '../../css/p/poevsu1dj.css';
import '../../css/b/bq8ujbbuo.css';
import '../../css/h/htf6bbcch.css';
import '../../css/d/d81xsjbgu.css';
import '../../css/k/k8_b45pvi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="u-6enjbgb"/><path class="nh-fsmbcu"/><path class="v0tzu806k"/><path class="s5kcc4byv"/><path class="qecvpjb3m"/><path class="tt6s6mbsj"/><path class="nxlhx2b8i"/><path class="akjmrtbjh"/><path class="u6vchxbou"/><path class="dzwroi3aa"/><path class="m-ebzh5nt"/><path class="jtvguybqy"/><path class="poevsu1dj"/><path class="bq8ujbbuo"/><path class="htf6bbcch"/><path class="d81xsjbgu"/><path class="k8_b45pvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-pouting-medium-light"} {...others} />);
}

export default Component;
