import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j070gkb1w.css';
import '../../css/x/xi7o5706u.css';
import '../../css/x/x00rglgfe.css';
import '../../css/m/m71q68trp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j070gkb1w"/><path class="xi7o5706u"/><path class="x00rglgfe"/><path class="m71q68trp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:join-left"} {...others} />);
}

export default Component;
