import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsf-qnbqy.css';
import '../../css/b/b19x8pyha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsf-qnbqy"/><path class="b19x8pyha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:time-clock-fire-bold"} {...others} />);
}

export default Component;
