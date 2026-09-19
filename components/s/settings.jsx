import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajd76obsv.css';
import '../../css/y/yzerifeef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ajd76obsv"/><path class="yzerifeef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:settings"} {...others} />);
}

export default Component;
