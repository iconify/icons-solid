import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8jb_uuyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8jb_uuyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:hand-pointer"} {...others} />);
}

export default Component;
