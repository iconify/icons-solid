import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgtsofb-b.css';
import '../../css/k/ke2j7bc4a.css';
import '../../css/o/o24sug9tq.css';
import '../../css/y/yjk-_bc4n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kgtsofb-b"/><path class="ke2j7bc4a"/><path class="o24sug9tq"/><path class="yjk-_bc4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-20"} {...others} />);
}

export default Component;
