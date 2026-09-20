import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/y2yexxbvt.css';
import '../../css/x/xh27o9bqv.css';
import '../../css/x/xj23yy91a.css';
import '../../css/o/oa85sry3e.css';
import '../../css/t/tu818ug5p.css';
import '../../css/s/sisie5b5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="y2yexxbvt"/><path class="xh27o9bqv"/><path class="xj23yy91a"/><path class="oa85sry3e"/><path class="tu818ug5p"/><path class="sisie5b5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:custom-feeds-like-favorite"} {...others} />);
}

export default Component;
