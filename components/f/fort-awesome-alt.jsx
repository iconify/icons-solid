import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm5f1qe_p.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="dm5f1qe_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:fort-awesome-alt"} {...others} />);
}

export default Component;
