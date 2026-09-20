import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um3c7fi5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="um3c7fi5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:local-convenience-store"} {...others} />);
}

export default Component;
