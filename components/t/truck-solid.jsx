import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogg2qpwxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogg2qpwxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:truck-solid"} {...others} />);
}

export default Component;
