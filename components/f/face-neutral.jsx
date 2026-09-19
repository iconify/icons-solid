import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww4fyqbuj.css';
import '../../css/d/da0t0goah.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ww4fyqbuj"/><path class="da0t0goah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:face-neutral"} {...others} />);
}

export default Component;
