import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f7ok1m12w.css';
import '../../css/s/sm_z9gbwi.css';
import '../../css/j/jipvxn5py.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f7ok1m12w"/><path class="sm_z9gbwi"/><path class="jipvxn5py"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hourglass-line-linear"} {...others} />);
}

export default Component;
