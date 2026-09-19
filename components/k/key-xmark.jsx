import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp8sdbcdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lp8sdbcdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:key-xmark"} {...others} />);
}

export default Component;
