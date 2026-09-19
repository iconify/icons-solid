import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3g1m9_ol.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u3g1m9_ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:buffalo-head"} {...others} />);
}

export default Component;
