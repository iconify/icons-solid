import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_ob7e47p.css';
import '../../css/x/xlw781-wq.css';
import '../../css/t/t1ocjs2ge.css';
import '../../css/t/tr3btsbam.css';
import '../../css/p/pumj5jn0o.css';
import '../../css/a/aiwm9gytk.css';
import '../../css/b/b0jnncb1v.css';
import '../../css/p/p4-48hbom.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="a_ob7e47p"/><path clip-rule="evenodd" class="xlw781-wq"/><path class="t1ocjs2ge"/><path clip-rule="evenodd" class="tr3btsbam"/><path class="pumj5jn0o"/><path clip-rule="evenodd" class="aiwm9gytk"/><path class="b0jnncb1v"/><path class="p4-48hbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:qr-bold"} {...others} />);
}

export default Component;
