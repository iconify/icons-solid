import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v18drh_jn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v18drh_jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-outline"} {...others} />);
}

export default Component;
