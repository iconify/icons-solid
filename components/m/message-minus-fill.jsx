import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj0tgpe2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj0tgpe2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-minus-fill"} {...others} />);
}

export default Component;
