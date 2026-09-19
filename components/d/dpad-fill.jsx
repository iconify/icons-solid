import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7ugyti7o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g7ugyti7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:dpad-fill"} {...others} />);
}

export default Component;
