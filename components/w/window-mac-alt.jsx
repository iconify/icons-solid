import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agtflua3y.css';
import '../../css/b/br29imbac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agtflua3y"/><path class="br29imbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:window-mac-alt"} {...others} />);
}

export default Component;
