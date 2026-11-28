import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp7d6dfdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zp7d6dfdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bracket-right-duo"} {...others} />);
}

export default Component;
