import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9c1rwb3t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="t9c1rwb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-server-1-solid"} {...others} />);
}

export default Component;
