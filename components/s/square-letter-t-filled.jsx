import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynyb3aclq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ynyb3aclq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-letter-t-filled"} {...others} />);
}

export default Component;
