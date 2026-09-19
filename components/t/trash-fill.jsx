import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfv6q6btr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfv6q6btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:trash-fill"} {...others} />);
}

export default Component;
