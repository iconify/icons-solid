import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/ottjqxlpz.css';
import '../../css/h/hu7q9bbvj.css';
import '../../css/i/iui5ovbws.css';
import '../../css/w/wr-sfrbaz.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ij2x_72vy"><circle class="ottjqxlpz"/><circle class="hu7q9bbvj"/><circle class="iui5ovbws"/><path class="wr-sfrbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:share"} {...others} />);
}

export default Component;
