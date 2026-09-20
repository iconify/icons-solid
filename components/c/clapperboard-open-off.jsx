import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/niqq-bc2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="niqq-bc2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:clapperboard-open-off"} {...others} />);
}

export default Component;
