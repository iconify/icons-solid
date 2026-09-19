import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m79p0kb3n.css';
import '../../css/t/ta4d-bcpy.css';
import '../../css/z/zskjbpbkl.css';
import '../../css/o/oc952-l0w.css';
import '../../css/o/ooyn5xbfs.css';
import '../../css/s/s5sxq11sd.css';
import '../../css/i/ipl-8ebnw.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m79p0kb3n"/><path class="ta4d-bcpy"/><path class="zskjbpbkl"/><path class="oc952-l0w"/><path class="ooyn5xbfs"/><path class="s5sxq11sd"/><path class="ipl-8ebnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:carbohydrates-outline"} {...others} />);
}

export default Component;
