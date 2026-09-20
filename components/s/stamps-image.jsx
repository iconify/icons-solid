import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye5v5lg2i.css';
import '../../css/t/txvs3zq4g.css';
import '../../css/c/ca7qoibuh.css';
import '../../css/u/u2sh8m9sz.css';
import '../../css/c/cwytxeb8w.css';
import '../../css/f/fccsn2bzu.css';
import '../../css/h/hhh_lhbng.css';
import '../../css/m/m0skyybsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ye5v5lg2i"/><path class="txvs3zq4g"/><path class="ca7qoibuh"/><path class="u2sh8m9sz"/><path class="cwytxeb8w"/><path class="fccsn2bzu"/><path class="hhh_lhbng"/><path class="m0skyybsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:stamps-image"} {...others} />);
}

export default Component;
