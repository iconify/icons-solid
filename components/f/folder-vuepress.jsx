import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll11jkzwr.css';
import '../../css/n/n7afpq_ej.css';
import '../../css/p/pjrgz1bag.css';
import '../../css/t/tgzu8obtk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ll11jkzwr"/><path class="n7afpq_ej"/><path class="pjrgz1bag"/><path class="tgzu8obtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-vuepress"} {...others} />);
}

export default Component;
