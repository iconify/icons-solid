import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snawm_ovu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="snawm_ovu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:bookmark"} {...others} />);
}

export default Component;
