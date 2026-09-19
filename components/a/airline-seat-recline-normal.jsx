import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_tdmcb6r.css';

const viewBox = {"width":344,"height":424};
const content = `<path class="u_tdmcb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:airline-seat-recline-normal"} {...others} />);
}

export default Component;
