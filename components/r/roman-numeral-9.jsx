import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r29f78hcy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r29f78hcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:roman-numeral-9"} {...others} />);
}

export default Component;
