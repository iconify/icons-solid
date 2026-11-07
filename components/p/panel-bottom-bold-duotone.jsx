import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9asq1fvt.css';
import '../../css/l/l4t7dwu3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q9asq1fvt"/><path class="l4t7dwu3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-bottom-bold-duotone"} {...others} />);
}

export default Component;
