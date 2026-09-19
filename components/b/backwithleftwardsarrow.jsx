import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0tm3lyhl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c0tm3lyhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:backwithleftwardsarrow"} {...others} />);
}

export default Component;
