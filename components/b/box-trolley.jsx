import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/p/p1_sl2blu.css';
import '../../css/h/hyqbpn8ik.css';
import '../../css/s/sicfeacjz.css';
import '../../css/b/b-jaitb6q.css';
import '../../css/t/tyaedu5is.css';
import '../../css/j/jzbidj4vc.css';
import '../../css/e/eg49ebbed.css';
import '../../css/n/n3ng8maoo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="p1_sl2blu"/><path class="hyqbpn8ik"/><path class="sicfeacjz"/><path class="b-jaitb6q"/><path class="tyaedu5is"/><path class="jzbidj4vc"/><path class="eg49ebbed"/><path class="n3ng8maoo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:box-trolley"} {...others} />);
}

export default Component;
