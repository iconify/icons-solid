import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxx4uub5u.css';
import '../../css/m/m7s1g-b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxx4uub5u"/><path class="m7s1g-b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:at"} {...others} />);
}

export default Component;
