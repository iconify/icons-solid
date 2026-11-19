import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mik60qboj.css';
import '../../css/o/o7t8y_2nd.css';
import '../../css/j/jf-h0mblo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mik60qboj"/><path class="o7t8y_2nd"/><path class="jf-h0mblo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-kiss-heart"} {...others} />);
}

export default Component;
