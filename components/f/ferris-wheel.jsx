import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiw61ob7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xiw61ob7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ferris-wheel"} {...others} />);
}

export default Component;
