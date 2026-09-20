import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gj620ccpc.css';
import '../../css/f/f6x_bdc8j.css';
import '../../css/h/hp18qze2g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gj620ccpc"/><path class="f6x_bdc8j"/><path class="hp18qze2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:credit-card-approved"} {...others} />);
}

export default Component;
