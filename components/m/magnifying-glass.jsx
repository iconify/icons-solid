import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1j8od6ti.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b1j8od6ti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:magnifying-glass"} {...others} />);
}

export default Component;
