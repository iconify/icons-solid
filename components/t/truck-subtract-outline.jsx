import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1u83iczg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b1u83iczg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:truck-subtract-outline"} {...others} />);
}

export default Component;
