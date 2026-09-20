import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-4fvqbqp.css';
import '../../css/m/m8d3-833c.css';
import '../../css/k/kdnye7bgm.css';
import '../../css/n/nq4hs8b-s.css';
import '../../css/u/u4a8yxbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x-4fvqbqp"/><path class="m8d3-833c"/><path class="kdnye7bgm"/><path class="nq4hs8b-s"/><path class="u4a8yxbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:style-three-pin-factory"} {...others} />);
}

export default Component;
