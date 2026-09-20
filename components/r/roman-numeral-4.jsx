import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf9kgebwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lf9kgebwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:roman-numeral-4"} {...others} />);
}

export default Component;
