import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neoczv19k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="neoczv19k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:info-off"} {...others} />);
}

export default Component;
