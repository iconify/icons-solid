import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-4fvqbqp.css';
import '../../css/m/m8d3-833c.css';
import '../../css/j/j8do8abjd.css';
import '../../css/w/w9fkr9_pg.css';
import '../../css/a/azh1fbcoo.css';
import '../../css/x/xu_zmubrt.css';
import '../../css/p/pld4rlz-m.css';
import '../../css/w/wwy-tyuum.css';
import '../../css/k/kdnye7bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x-4fvqbqp"/><path class="m8d3-833c"/><path class="j8do8abjd"/><path class="w9fkr9_pg"/><path class="azh1fbcoo"/><path class="xu_zmubrt"/><path class="pld4rlz-m"/><path class="wwy-tyuum"/><path class="kdnye7bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:style-three-pin-home"} {...others} />);
}

export default Component;
