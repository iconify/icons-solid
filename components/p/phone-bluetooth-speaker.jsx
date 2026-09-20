import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1kvy0b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r1kvy0b2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:phone-bluetooth-speaker"} {...others} />);
}

export default Component;
