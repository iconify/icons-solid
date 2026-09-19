import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkn5tq8xs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lkn5tq8xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:topwithupwardsarrow"} {...others} />);
}

export default Component;
