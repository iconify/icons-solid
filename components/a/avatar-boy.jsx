import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yp686cbfa.css';
import '../../css/x/xcs4rno0a.css';
import '../../css/y/y12nw1bxe.css';
import '../../css/s/ssbli5bpd.css';
import '../../css/b/b9dkf6ydb.css';
import '../../css/v/vyvg8_5sn.css';
import '../../css/v/v7ffv68li.css';
import '../../css/l/lfe9id10l.css';
import '../../css/p/p64brmpgu.css';
import '../../css/i/ii1hn--6r.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yp686cbfa"/><path class="xcs4rno0a"/><path class="y12nw1bxe"/><path class="ssbli5bpd"/><path class="b9dkf6ydb"/><path class="vyvg8_5sn"/><path class="v7ffv68li"/><path class="lfe9id10l wm-shine"/><path class="p64brmpgu wm-shine"/><path class="ii1hn--6r wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-boy"} {...others} />);
}

export default Component;
