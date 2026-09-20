import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li5ilbssx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="li5ilbssx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fridge-variant-off-outline"} {...others} />);
}

export default Component;
