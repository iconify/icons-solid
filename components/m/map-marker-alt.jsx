import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc9m02b9t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lc9m02b9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:map-marker-alt"} {...others} />);
}

export default Component;
