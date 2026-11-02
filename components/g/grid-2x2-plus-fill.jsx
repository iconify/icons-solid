import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_yxm_tx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gp_yxm_tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:grid-2x2-plus-fill"} {...others} />);
}

export default Component;
