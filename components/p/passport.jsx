import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij_9gl4fp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ij_9gl4fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:passport"} {...others} />);
}

export default Component;
