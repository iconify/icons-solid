import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfbnxnbud.css';
import '../../css/l/l7jujabhz.css';

const viewBox = {"width":224.99,"height":160.66};
const content = `<path class="hfbnxnbud"/><path class="l7jujabhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fanta"} {...others} />);
}

export default Component;
