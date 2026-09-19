import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz4ijodgd.css';
import '../../css/l/liksgb7co.css';
import '../../css/p/p5f4hpmqx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pz4ijodgd"/><path class="liksgb7co"/><path class="p5f4hpmqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:u-turn-sign-duo"} {...others} />);
}

export default Component;
