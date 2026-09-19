import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yx2zuwn-x.css';
import '../../css/z/zt82co-hu.css';
import '../../css/n/n4n09nu0h.css';
import '../../css/x/xkbow_bdc.css';
import '../../css/g/glgw24bfj.css';
import '../../css/v/vvdgjl_2r.css';
import '../../css/x/xtg8qac6f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="yx2zuwn-x"/><path class="zt82co-hu"/><path class="n4n09nu0h"/><path class="xkbow_bdc"/><path class="glgw24bfj"/><path class="vvdgjl_2r"/><path class="xtg8qac6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cable-car"} {...others} />);
}

export default Component;
