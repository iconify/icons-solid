import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xldl5kbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xldl5kbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:picture-in-picture-solid"} {...others} />);
}

export default Component;
