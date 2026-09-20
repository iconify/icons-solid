import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gx6qhfzla.css';
import '../../css/p/p93q--bvq.css';
import '../../css/j/j0w4br14j.css';
import '../../css/f/f7ela4i1x.css';
import '../../css/t/tt_3m-bvu.css';
import '../../css/u/uxqdooboa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gx6qhfzla"/><path class="p93q--bvq"/><path class="j0w4br14j"/><path class="f7ela4i1x"/><path class="tt_3m-bvu"/><path class="uxqdooboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:share-location-hand-2"} {...others} />);
}

export default Component;
