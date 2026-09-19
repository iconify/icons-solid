import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p19pb4brm.css';
import '../../css/b/bm_a0o4dd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p19pb4brm"/><path class="bm_a0o4dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:kissmark"} {...others} />);
}

export default Component;
