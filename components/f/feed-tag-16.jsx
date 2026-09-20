import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj72zb1uq.css';
import '../../css/t/tp29nr70i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hj72zb1uq"/><path class="tp29nr70i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:feed-tag-16"} {...others} />);
}

export default Component;
