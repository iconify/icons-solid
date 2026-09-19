import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6tzhbbzf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k6tzhbbzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:video-alt3"} {...others} />);
}

export default Component;
