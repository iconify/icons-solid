import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vy2wytbil.css';
import '../../css/u/uthr8pbrw.css';
import '../../css/e/etu1ebctc.css';
import '../../css/f/flk6neb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vy2wytbil"/><path class="uthr8pbrw"/><path class="etu1ebctc"/><path class="flk6neb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds-lightning"} {...others} />);
}

export default Component;
