import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2i99g00u.css';
import '../../css/s/sydozsk4m.css';
import '../../css/r/ri4-sxb-d.css';
import '../../css/b/b1boptwzg.css';
import '../../css/y/yoy_pbb2g.css';
import '../../css/v/vy5azsbvo.css';
import '../../css/c/cs4cjzb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w2i99g00u"/><rect class="sydozsk4m"/><rect transform="rotate(-45 1.9 6.88)" class="ri4-sxb-d"/><path class="b1boptwzg"/><rect class="yoy_pbb2g"/><rect transform="rotate(-45 1.9 6.88)" class="vy5azsbvo"/><path class="cs4cjzb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shapes-plus"} {...others} />);
}

export default Component;
