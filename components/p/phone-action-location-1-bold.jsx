import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q25l8gb6x.css';
import '../../css/y/yac-066cb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q25l8gb6x"/><path class="yac-066cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-action-location-1-bold"} {...others} />);
}

export default Component;
