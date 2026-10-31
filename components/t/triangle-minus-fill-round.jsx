import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdm-kab9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdm-kab9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:triangle-minus-fill-round"} {...others} />);
}

export default Component;
