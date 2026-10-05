import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/l_exppbta.css';
import '../../css/w/w35ps18xb.css';
import '../../css/r/rddduccbc.css';
import '../../css/y/y4p5pqbqv.css';
import '../../css/u/u7axzbbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="l_exppbta"/><path class="w35ps18xb"/><path class="rddduccbc"/><path class="y4p5pqbqv"/><path class="u7axzbbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:protractor"} {...others} />);
}

export default Component;
