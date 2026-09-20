import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdlzzib6u.css';
import '../../css/s/sdjm4xshj.css';
import '../../css/w/w1hlg-8aw.css';
import '../../css/n/n_3_ftbco.css';

const viewBox = {"width":587,"height":587};
const content = `<g class="ft5dv1b6b"><path class="tdlzzib6u"/><path clip-rule="evenodd" class="sdjm4xshj"/><path class="w1hlg-8aw"/><path clip-rule="evenodd" class="n_3_ftbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jobicy"} {...others} />);
}

export default Component;
