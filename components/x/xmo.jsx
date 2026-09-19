import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydtohebyk.css';
import '../../css/m/md286fbip.css';
import '../../css/o/olt_orobs.css';
import '../../css/c/cea2m5o8u.css';
import '../../css/b/bc35tmbvd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="ydtohebyk"/><g class="md286fbip"><path class="olt_orobs"/><path class="cea2m5o8u"/><path class="bc35tmbvd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xmo"} {...others} />);
}

export default Component;
