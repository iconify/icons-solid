import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iny_tercw.css';
import '../../css/b/be2qjqbmo.css';
import '../../css/c/c9uihwbwb.css';
import '../../css/w/wohlzwwti.css';
import '../../css/s/s4o9yxbxi.css';
import '../../css/i/iipt34dbe.css';
import '../../css/c/c5azgp9lp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iny_tercw"/><path class="be2qjqbmo"/><path class="c9uihwbwb"/><path class="wohlzwwti"/><path class="s4o9yxbxi"/><path class="iipt34dbe"/><path class="c5azgp9lp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:synchronize-lock-encrypt"} {...others} />);
}

export default Component;
