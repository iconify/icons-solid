import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6o6gtbse.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w6o6gtbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:assistive-listening-systems"} {...others} />);
}

export default Component;
