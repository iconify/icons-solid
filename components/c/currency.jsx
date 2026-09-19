import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p7sul9r2v.css';
import '../../css/q/qcvbzqbta.css';
import '../../css/g/gq0lknn2u.css';
import '../../css/w/w7k0ltbfx.css';
import '../../css/a/aktchkbgk.css';
import '../../css/q/qsxw36boa.css';
import '../../css/w/w5kqui-0t.css';
import '../../css/f/f_xjn-b5g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="p7sul9r2v"/><path class="qcvbzqbta"/><path class="gq0lknn2u"/><path class="w7k0ltbfx"/><path class="aktchkbgk"/><path class="qsxw36boa"/><path class="w5kqui-0t"/><path class="f_xjn-b5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:currency"} {...others} />);
}

export default Component;
