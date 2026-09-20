import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv1vpq53t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jv1vpq53t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:table-rows"} {...others} />);
}

export default Component;
