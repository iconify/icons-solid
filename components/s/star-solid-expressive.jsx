import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yic6p8mfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yic6p8mfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:star-solid-expressive"} {...others} />);
}

export default Component;
