import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap0-habhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ap0-habhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:circle-box-outline"} {...others} />);
}

export default Component;
