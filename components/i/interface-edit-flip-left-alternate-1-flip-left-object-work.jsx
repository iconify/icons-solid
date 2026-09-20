import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgel_fcqd.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bgel_fcqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-left-alternate-1-flip-left-object-work"} {...others} />);
}

export default Component;
