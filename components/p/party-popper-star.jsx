import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxbyirfpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxbyirfpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:party-popper-star"} {...others} />);
}

export default Component;
