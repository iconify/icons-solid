import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x72_jn4yw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x72_jn4yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rectangle-horizontal-filled"} {...others} />);
}

export default Component;
