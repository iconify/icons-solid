import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap3tbfjfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ap3tbfjfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:universal-access"} {...others} />);
}

export default Component;
