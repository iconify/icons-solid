import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i65qq5b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i65qq5b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alpha-x"} {...others} />);
}

export default Component;
