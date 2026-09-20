import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw_q3ok0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tw_q3ok0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:microchip"} {...others} />);
}

export default Component;
