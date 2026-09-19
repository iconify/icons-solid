import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxkx72bus.css';
import '../../css/b/byx4gtwse.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="hxkx72bus"/><path class="byx4gtwse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:postgresql-wordmark"} {...others} />);
}

export default Component;
