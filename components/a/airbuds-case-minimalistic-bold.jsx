import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa3i2xbai.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wa3i2xbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-minimalistic-bold"} {...others} />);
}

export default Component;
