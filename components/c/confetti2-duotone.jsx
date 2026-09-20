import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8_2-obgx.css';
import '../../css/n/n_gojf7ke.css';
import '../../css/u/un4ldubvn.css';
import '../../css/c/caqvjbcca.css';
import '../../css/c/c2lbokb9y.css';
import '../../css/j/japywmblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g8_2-obgx"/><path class="n_gojf7ke"/><path class="un4ldubvn"/><path class="caqvjbcca"/><path class="c2lbokb9y"/><path class="japywmblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:confetti2-duotone"} {...others} />);
}

export default Component;
