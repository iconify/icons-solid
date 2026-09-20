import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abv6fbbiq.css';
import '../../css/v/vy5mqsbys.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="abv6fbbiq"/><path class="vy5mqsbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ghidra-light"} {...others} />);
}

export default Component;
