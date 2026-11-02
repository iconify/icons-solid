import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsim1g_de.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gsim1g_de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrow-down-wide-narrow-fill"} {...others} />);
}

export default Component;
