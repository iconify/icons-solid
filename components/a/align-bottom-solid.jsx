import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwxn1vbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwxn1vbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:align-bottom-solid"} {...others} />);
}

export default Component;
