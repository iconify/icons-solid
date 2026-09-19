import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzogf1b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzogf1b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:color-picker-fill"} {...others} />);
}

export default Component;
