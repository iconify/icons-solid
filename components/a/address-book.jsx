import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ymq2wwbit.css';
import '../../css/e/ewkhlybhu.css';
import '../../css/q/qngfisb0g.css';
import '../../css/n/nrq3n6b7t.css';
import '../../css/p/php-lp53d.css';
import '../../css/q/q5in__i_l.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow ymq2wwbit"/><path class="ewkhlybhu"/><path class="qngfisb0g"/><path class="nrq3n6b7t"/><path class="php-lp53d wm-shine"/><path class="q5in__i_l wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:address-book"} {...others} />);
}

export default Component;
