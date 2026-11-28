import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1a2dm2xr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1a2dm2xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:vinyl-play"} {...others} />);
}

export default Component;
