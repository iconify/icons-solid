import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he5lwbciq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="he5lwbciq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nanoleaf-outdoor-string"} {...others} />);
}

export default Component;
