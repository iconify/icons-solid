import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1tym-4tt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e1tym-4tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:japanese-yen-sharp-duotone"} {...others} />);
}

export default Component;
