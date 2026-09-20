import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqo6g6brk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqo6g6brk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:label-percent"} {...others} />);
}

export default Component;
