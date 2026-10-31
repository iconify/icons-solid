import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr5p_h15c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr5p_h15c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:number-8-round"} {...others} />);
}

export default Component;
