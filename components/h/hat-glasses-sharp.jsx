import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5g_1949x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5g_1949x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hat-glasses-sharp"} {...others} />);
}

export default Component;
