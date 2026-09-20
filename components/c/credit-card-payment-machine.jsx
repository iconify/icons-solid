import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zmv--acbl.css';
import '../../css/g/gxja5qb7o.css';
import '../../css/q/qmdrytbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="zmv--acbl"/><path class="gxja5qb7o"/><path class="qmdrytbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:credit-card-payment-machine"} {...others} />);
}

export default Component;
