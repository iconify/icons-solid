import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/a/a06nqacsr.css';
import '../../css/t/trlth4bch.css';
import '../../css/k/k_yyil5ms.css';
import '../../css/n/nf1dv4jjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><ellipse class="h_l78yaxm"/><path class="a06nqacsr"/><path class="trlth4bch"/><path class="k_yyil5ms"/><path class="nf1dv4jjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database"} {...others} />);
}

export default Component;
