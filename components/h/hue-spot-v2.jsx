import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqb5x87ld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqb5x87ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:hue-spot-v2"} {...others} />);
}

export default Component;
