import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgph-8qhi.css';
import '../../css/m/md286fbip.css';
import '../../css/i/i5r77abpp.css';
import '../../css/s/sbyl84brr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="pgph-8qhi"/><g class="md286fbip"><path class="i5r77abpp"/><path class="sbyl84brr"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:uma"} {...others} />);
}

export default Component;
