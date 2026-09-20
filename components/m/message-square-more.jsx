import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2mv7oq0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g2mv7oq0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-square-more"} {...others} />);
}

export default Component;
