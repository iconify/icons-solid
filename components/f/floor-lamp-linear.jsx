import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/z/zcqpw-bie.css';
import '../../css/s/sgbntkbqv.css';
import '../../css/d/dzj-pac0y.css';
import '../../css/j/j02jjxvbk.css';
import '../../css/o/ohb9m9k_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="zcqpw-bie"/><path class="sgbntkbqv"/><path class="dzj-pac0y"/><path class="j02jjxvbk"/><path class="ohb9m9k_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-linear"} {...others} />);
}

export default Component;
