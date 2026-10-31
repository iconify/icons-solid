import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/slwvv0b7y.css';
import '../../css/b/ba2h5y1rv.css';
import '../../css/b/bzb7protl.css';
import '../../css/e/evrhv3bzm.css';
import '../../css/e/eihps2bsw.css';
import '../../css/y/ytfnh1bgj.css';
import '../../css/f/f-bmk-v4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="slwvv0b7y wm-shadow"/><path class="ba2h5y1rv"/><path class="bzb7protl"/><path class="evrhv3bzm wm-deco"/><path class="eihps2bsw"/><path class="ytfnh1bgj"/><path class="f-bmk-v4n wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:choco-strawberry"} {...others} />);
}

export default Component;
