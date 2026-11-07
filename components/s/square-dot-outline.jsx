import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er9_2_bjd.css';
import '../../css/n/n8eavcbnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er9_2_bjd"/><path clip-rule="evenodd" class="n8eavcbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-dot-outline"} {...others} />);
}

export default Component;
