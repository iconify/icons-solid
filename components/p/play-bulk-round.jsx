import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp6f-bgms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp6f-bgms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-bulk-round"} {...others} />);
}

export default Component;
