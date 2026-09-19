import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1em5i3_b.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="w1em5i3_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:kickstarter"} {...others} />);
}

export default Component;
