import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq8rsvbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dq8rsvbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-phone-alt-1-fill"} {...others} />);
}

export default Component;
