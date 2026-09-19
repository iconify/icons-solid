import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz7du6xnm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yz7du6xnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:checkmark-outline"} {...others} />);
}

export default Component;
