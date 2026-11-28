import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdfw7y4er.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary vdfw7y4er"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:line-dashed-duotone"} {...others} />);
}

export default Component;
