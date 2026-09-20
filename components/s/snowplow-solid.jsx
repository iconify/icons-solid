import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-p1mk66q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q-p1mk66q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:snowplow-solid"} {...others} />);
}

export default Component;
