import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeb407i0o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xeb407i0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:audio-cable-solid"} {...others} />);
}

export default Component;
