import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of9o9pahi.css';
import '../../css/r/rq1sw1bve.css';
import '../../css/d/dfa3o1blh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="of9o9pahi"/><path class="rq1sw1bve"/><path class="dfa3o1blh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:qwik"} {...others} />);
}

export default Component;
