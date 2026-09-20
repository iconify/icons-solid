import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rngp1fbyn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rngp1fbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:horse-head"} {...others} />);
}

export default Component;
