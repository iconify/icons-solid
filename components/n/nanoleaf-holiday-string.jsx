import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsd3660jw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsd3660jw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nanoleaf-holiday-string"} {...others} />);
}

export default Component;
