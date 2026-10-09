import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvu3z166w.css';
import '../../css/a/a1dehnyjo.css';
import '../../css/c/c6f6snb_q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fvu3z166w"/><path class="a1dehnyjo"/><path class="c6f6snb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-dropper-48"} {...others} />);
}

export default Component;
