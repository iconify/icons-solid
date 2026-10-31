import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow11ylbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ow11ylbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cooking-pot-gloss"} {...others} />);
}

export default Component;
