import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_k7z_b-f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n_k7z_b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-reverse-stroke-20"} {...others} />);
}

export default Component;
