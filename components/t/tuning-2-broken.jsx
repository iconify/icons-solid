import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyac2jmak.css';
import '../../css/z/zavg8bcsl.css';
import '../../css/r/ru_ir7qks.css';
import '../../css/g/g6zidk1lb.css';
import '../../css/n/nb3c61b-i.css';
import '../../css/t/twyh0wleg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lyac2jmak"/><path class="zavg8bcsl"/><path class="ru_ir7qks"/><path class="g6zidk1lb"/><path class="nb3c61b-i"/><path class="twyh0wleg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-2-broken"} {...others} />);
}

export default Component;
