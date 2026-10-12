import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2580eb4o.css';
import '../../css/m/mlrwjqbkp.css';
import '../../css/k/knmar5oyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 21.26 11.91)" class="w2580eb4o"/><rect transform="rotate(90 21.26 2.73)" class="mlrwjqbkp"/><path class="knmar5oyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panels-bottom"} {...others} />);
}

export default Component;
