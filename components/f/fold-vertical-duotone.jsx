import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8ro90bwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8ro90bwq primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fold-vertical-duotone"} {...others} />);
}

export default Component;
