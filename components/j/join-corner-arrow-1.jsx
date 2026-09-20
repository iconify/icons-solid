import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8s82qb2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e8s82qb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:join-corner-arrow-1"} {...others} />);
}

export default Component;
