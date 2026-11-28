import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzzh1ommd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary qzzh1ommd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-detect-duotone"} {...others} />);
}

export default Component;
