import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szn9f3b9w.css';
import '../../css/l/lr01kmbcw.css';
import '../../css/n/nluribbnp.css';
import '../../css/n/ngct_37bh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="szn9f3b9w"/><path class="lr01kmbcw"/><path class="nluribbnp"/><path class="ngct_37bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sunriseovermountains"} {...others} />);
}

export default Component;
