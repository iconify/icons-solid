import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e882zy72m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e882zy72m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:delete-bin-6-fill"} {...others} />);
}

export default Component;
