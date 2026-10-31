import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tbmbvfbqg.css';
import '../../css/v/v8hjqabrc.css';
import '../../css/w/wjn5xcccf.css';
import '../../css/l/loo-poa1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tbmbvfbqg wm-shadow"/><path class="v8hjqabrc wm-shadow"/><path class="wjn5xcccf"/><path class="loo-poa1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-up-down"} {...others} />);
}

export default Component;
