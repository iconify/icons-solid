import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/a/am0b8ab3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="am0b8ab3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scissors-square-bold-duotone"} {...others} />);
}

export default Component;
