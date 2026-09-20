import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpve6fznp.css';
import '../../css/a/a445fmbwk.css';
import '../../css/f/fmwg0sbrg.css';
import '../../css/p/pqn239hkp.css';
import '../../css/p/pjhuwibww.css';
import '../../css/e/eab2l_bke.css';
import '../../css/o/o-0wqteis.css';
import '../../css/x/x-a8p-mgu.css';
import '../../css/g/gll5vrb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hpve6fznp"/><path class="a445fmbwk"/><path class="fmwg0sbrg"/><path class="pqn239hkp"/><path class="pjhuwibww"/><path class="eab2l_bke"/><path class="o-0wqteis"/><path class="x-a8p-mgu"/><path class="gll5vrb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:contactless-payment"} {...others} />);
}

export default Component;
