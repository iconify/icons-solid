import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh9qibbxb.css';
import '../../css/l/lzqzt4b1t.css';
import '../../css/r/rxzx8gbpb.css';
import '../../css/j/jutti7b4g.css';
import '../../css/r/rxw5-0mzd.css';
import '../../css/u/u8rm-_byn.css';
import '../../css/n/n68a7wbas.css';
import '../../css/z/zi6t6zrpx.css';
import '../../css/c/cjad1xbdt.css';
import '../../css/p/p_kugpbit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bh9qibbxb wm-shadow"/><path class="lzqzt4b1t wm-k"/><path class="rxzx8gbpb wm-k"/><path class="jutti7b4g wm-a"/><path class="rxw5-0mzd wm-a"/><path class="u8rm-_byn wm-s"/><path class="n68a7wbas wm-s"/><path class="wm-s zi6t6zrpx"/><path class="cjad1xbdt wm-s"/><path class="p_kugpbit wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:sparkler"} {...others} />);
}

export default Component;
