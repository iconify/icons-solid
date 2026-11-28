import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osd5_vbna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osd5_vbna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:cooking-pot-check"} {...others} />);
}

export default Component;
