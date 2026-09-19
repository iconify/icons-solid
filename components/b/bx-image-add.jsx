import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yibyn6bhe.css';
import '../../css/f/fxqkr7b2w.css';
import '../../css/v/viznwcc0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yibyn6bhe"/><path class="fxqkr7b2w"/><path class="viznwcc0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-image-add"} {...others} />);
}

export default Component;
