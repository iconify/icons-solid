import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er6g1acjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er6g1acjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ring-smart-lighting"} {...others} />);
}

export default Component;
