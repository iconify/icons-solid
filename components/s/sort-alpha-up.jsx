import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od52gv09l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="od52gv09l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:sort-alpha-up"} {...others} />);
}

export default Component;
