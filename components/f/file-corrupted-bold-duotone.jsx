import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1ndrfb_z.css';
import '../../css/x/x4f46-b2l.css';
import '../../css/a/ayfii2kus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1ndrfb_z"/><path class="x4f46-b2l"/><path class="ayfii2kus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-corrupted-bold-duotone"} {...others} />);
}

export default Component;
