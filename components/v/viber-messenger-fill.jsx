import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9--6g2ow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9--6g2ow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:viber-messenger-fill"} {...others} />);
}

export default Component;
