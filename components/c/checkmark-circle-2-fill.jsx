import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsvj-xbgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jsvj-xbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:checkmark-circle-2-fill"} {...others} />);
}

export default Component;
