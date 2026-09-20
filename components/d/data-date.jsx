import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh3kbwobr.css';
import '../../css/q/q7cll_b2k.css';
import '../../css/c/cpbja35_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh3kbwobr"/><path clip-rule="evenodd" class="q7cll_b2k"/><path clip-rule="evenodd" class="cpbja35_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:data-date"} {...others} />);
}

export default Component;
