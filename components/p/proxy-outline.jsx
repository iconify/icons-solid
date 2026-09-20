import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbrq54brc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hbrq54brc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:proxy-outline"} {...others} />);
}

export default Component;
