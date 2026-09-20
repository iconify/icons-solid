import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaq65jbqm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yaq65jbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-bottom-flip-bottom-object-work"} {...others} />);
}

export default Component;
