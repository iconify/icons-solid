import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibdu96b1j.css';
import '../../css/b/bck25d51j.css';
import '../../css/f/f1w0ku3yn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(45 9.93 4.31)" class="ibdu96b1j"/><rect transform="rotate(45 10.28 4.67)" class="bck25d51j"/><path class="f1w0ku3yn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cleaning-brush"} {...others} />);
}

export default Component;
