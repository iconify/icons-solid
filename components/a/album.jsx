import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnt86abll.css';
import '../../css/e/ehlz8obmy.css';
import '../../css/f/fahlc6baj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gnt86abll"/><rect transform="rotate(90 0 21.35)scale(-1 1)" class="ehlz8obmy"/><path class="fahlc6baj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:album"} {...others} />);
}

export default Component;
