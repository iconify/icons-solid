import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5wz4ttdq.css';

const viewBox = {"width":1024,"height":897};
const content = `<path class="y5wz4ttdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:teddybear"} {...others} />);
}

export default Component;
