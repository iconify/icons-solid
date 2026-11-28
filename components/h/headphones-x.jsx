import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klgc4_9wu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="klgc4_9wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:headphones-x"} {...others} />);
}

export default Component;
