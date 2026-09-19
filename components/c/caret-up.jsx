import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arv9ch36c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="arv9ch36c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:caret-up"} {...others} />);
}

export default Component;
