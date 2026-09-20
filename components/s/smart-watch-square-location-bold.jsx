import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzlnpvced.css';
import '../../css/v/vmfgchi1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dzlnpvced"/><path class="vmfgchi1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-watch-square-location-bold"} {...others} />);
}

export default Component;
