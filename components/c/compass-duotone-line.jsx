import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6xh5bbvt.css';
import '../../css/d/df_pnlkgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d6xh5bbvt"/><path class="df_pnlkgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass-duotone-line"} {...others} />);
}

export default Component;
