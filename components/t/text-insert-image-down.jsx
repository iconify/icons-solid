import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwcesuumr.css';
import '../../css/a/anxs8zbnr.css';
import '../../css/m/midz29bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dwcesuumr"/><rect transform="rotate(90 21.42 13.63)" class="anxs8zbnr"/><rect transform="rotate(90 21.42 13.63)" class="midz29bcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-insert-image-down"} {...others} />);
}

export default Component;
