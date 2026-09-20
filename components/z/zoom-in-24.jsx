import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc15x1w_o.css';
import '../../css/s/scnvldbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lc15x1w_o"/><path class="scnvldbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:zoom-in-24"} {...others} />);
}

export default Component;
