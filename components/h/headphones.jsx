import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz4027bss.css';
import '../../css/h/hdke9bc-g.css';
import '../../css/p/pvl81kbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qz4027bss wm-a"/><path class="hdke9bc-g wm-k"/><path class="pvl81kbjy wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:headphones"} {...others} />);
}

export default Component;
