import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puzu3pbpi.css';
import '../../css/a/a8uztcb9j.css';
import '../../css/n/n1f1jybqz.css';
import '../../css/x/x8u04hbzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="puzu3pbpi wm-k"/><path class="a8uztcb9j wm-k"/><path class="n1f1jybqz wm-a"/><path class="wm-k x8u04hbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:landmark"} {...others} />);
}

export default Component;
