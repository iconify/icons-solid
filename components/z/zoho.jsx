import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az2la63pq.css';
import '../../css/t/tw6cu5ihj.css';

const viewBox = {"width":1024,"height":366};
const content = `<path class="az2la63pq"/><path class="tw6cu5ihj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:zoho"} {...others} />);
}

export default Component;
