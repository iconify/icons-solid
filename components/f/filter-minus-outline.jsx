import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaof11a0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eaof11a0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:filter-minus-outline"} {...others} />);
}

export default Component;
