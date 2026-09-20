import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi-m-sboz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vi-m-sboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:edotleclerc"} {...others} />);
}

export default Component;
