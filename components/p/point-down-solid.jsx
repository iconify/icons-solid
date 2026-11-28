import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq2ums2ju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kq2ums2ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:point-down-solid"} {...others} />);
}

export default Component;
