import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j0bnbk9rx.css';
import '../../css/s/sxauu5dml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="j0bnbk9rx"/><path class="sxauu5dml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:mail-open"} {...others} />);
}

export default Component;
