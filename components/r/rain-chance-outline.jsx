import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phxi50m6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="phxi50m6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:rain-chance-outline"} {...others} />);
}

export default Component;
