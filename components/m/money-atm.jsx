import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/w/wxr1mab4r.css';
import '../../css/a/af0oyxbis.css';
import '../../css/h/hhwek0b4e.css';
import '../../css/w/w04we-suv.css';
import '../../css/v/v8o4fibkj.css';
import '../../css/b/byzkb3bsz.css';
import '../../css/k/k9gqkbcbz.css';
import '../../css/c/cyi7wrxdf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="wxr1mab4r"/><path class="af0oyxbis"/><path class="hhwek0b4e"/><path class="w04we-suv"/><path class="v8o4fibkj"/><path class="byzkb3bsz"/><path class="k9gqkbcbz"/><path class="cyi7wrxdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:money-atm"} {...others} />);
}

export default Component;
