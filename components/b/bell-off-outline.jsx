import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewr0bdyvc.css';
import '../../css/l/ll7areqdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewr0bdyvc"/><path clip-rule="evenodd" class="ll7areqdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-off-outline"} {...others} />);
}

export default Component;
