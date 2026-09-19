import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imxv1m5kb.css';
import '../../css/t/t8iobcbuq.css';
import '../../css/l/l0krix3kz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="imxv1m5kb"/><path class="t8iobcbuq"/><path class="l0krix3kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:playstation"} {...others} />);
}

export default Component;
