import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1i6-zboz.css';
import '../../css/h/hd2gueb5d.css';
import '../../css/l/ls79o6b5j.css';
import '../../css/v/vuz6fynvu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="i1i6-zboz"/><path clip-rule="evenodd" class="hd2gueb5d"/><path class="ls79o6b5j"/><path class="vuz6fynvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:planet-moon-duo"} {...others} />);
}

export default Component;
