import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/h/hb3z05bnj.css';
import '../../css/g/gqarr2b2o.css';
import '../../css/j/jvkleccvu.css';
import '../../css/h/hrm2qlbwo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="hb3z05bnj"/><path class="gqarr2b2o"/><path class="jvkleccvu"/><path class="hrm2qlbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:hammer"} {...others} />);
}

export default Component;
