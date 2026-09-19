import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am3kbiccg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="am3kbiccg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:umbrella"} {...others} />);
}

export default Component;
