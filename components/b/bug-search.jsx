import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc5g-k-ol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fc5g-k-ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:bug-search"} {...others} />);
}

export default Component;
