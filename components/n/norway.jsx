import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqe71b-9z.css';
import '../../css/l/l1kbw1b1l.css';
import '../../css/c/cfoaekbqc.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="rqe71b-9z"/><path class="l1kbw1b1l"/><path class="cfoaekbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:norway"} {...others} />);
}

export default Component;
