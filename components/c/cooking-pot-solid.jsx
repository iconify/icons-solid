import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytzz9x6wa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytzz9x6wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cooking-pot-solid"} {...others} />);
}

export default Component;
