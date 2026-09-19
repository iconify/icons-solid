import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irq4-3e5k.css';
import '../../css/d/d-zstca3u.css';
import '../../css/k/klkict4oo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="irq4-3e5k"/><path class="d-zstca3u"/><path class="klkict4oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:skip-forward-outline-filled"} {...others} />);
}

export default Component;
