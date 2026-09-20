import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl5-w3b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zl5-w3b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shield-cross-outline"} {...others} />);
}

export default Component;
