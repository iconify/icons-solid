import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s75wz-bud.css';
import '../../css/o/o6fe24b0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s75wz-bud"/><path class="o6fe24b0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-from-line-bold-duotone"} {...others} />);
}

export default Component;
