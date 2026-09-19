import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwtv1pcoo.css';

const viewBox = {"width":19,"height":24};
const content = `<path class="fwtv1pcoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:yahoo"} {...others} />);
}

export default Component;
