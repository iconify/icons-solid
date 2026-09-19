import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/o/og2mb_bsw.css';
import '../../css/g/go9x5db2h.css';
import '../../css/z/zrd4dzp7j.css';
import '../../css/t/tkd66bb_l.css';
import '../../css/m/mg_li6b2h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="og2mb_bsw"/><path class="go9x5db2h"/><path class="zrd4dzp7j"/><path class="tkd66bb_l"/><path class="mg_li6b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:future-build-three"} {...others} />);
}

export default Component;
