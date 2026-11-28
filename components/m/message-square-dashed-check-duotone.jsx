import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjoc47qyp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pjoc47qyp primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-square-dashed-check-duotone"} {...others} />);
}

export default Component;
