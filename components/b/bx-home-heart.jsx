import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt2ou9bdc.css';
import '../../css/y/yvd4i4bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yt2ou9bdc"/><path class="yvd4i4bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-home-heart"} {...others} />);
}

export default Component;
