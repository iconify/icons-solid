import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bigdc0bis.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bigdc0bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:message-solid"} {...others} />);
}

export default Component;
