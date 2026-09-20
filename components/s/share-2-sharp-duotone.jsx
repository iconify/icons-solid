import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4p6zwb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4p6zwb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:share-2-sharp-duotone"} {...others} />);
}

export default Component;
