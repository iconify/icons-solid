import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edmso03vy.css';
import '../../css/o/o8qwv_bxa.css';
import '../../css/p/p74anlbhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="edmso03vy"/><rect class="o8qwv_bxa"/><path class="p74anlbhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail"} {...others} />);
}

export default Component;
