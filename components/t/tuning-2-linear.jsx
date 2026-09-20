import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyac2jmak.css';
import '../../css/z/zavg8bcsl.css';
import '../../css/q/q56o60zyz.css';
import '../../css/q/q174hactj.css';
import '../../css/r/r2c3lfbwa.css';
import '../../css/i/il3m-sbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lyac2jmak"/><path class="zavg8bcsl"/><path class="q56o60zyz"/><path class="q174hactj"/><path class="r2c3lfbwa"/><path class="il3m-sbqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-2-linear"} {...others} />);
}

export default Component;
