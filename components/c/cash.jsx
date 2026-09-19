import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqmgz0doi.css';
import '../../css/l/ld018kbkh.css';
import '../../css/f/f60e8jbjq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jqmgz0doi"/><path class="ld018kbkh"/><path class="f60e8jbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:cash"} {...others} />);
}

export default Component;
