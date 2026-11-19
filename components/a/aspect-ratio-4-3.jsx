import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnoa3befr.css';
import '../../css/i/i8zvvu--u.css';
import '../../css/r/r-naus49m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mnoa3befr"/><path class="i8zvvu--u"/><path class="r-naus49m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:aspect-ratio-4-3"} {...others} />);
}

export default Component;
