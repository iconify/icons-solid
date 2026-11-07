import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7g7y6boy.css';
import '../../css/q/qndnb7b2a.css';
import '../../css/k/kfbw_mbiu.css';
import '../../css/t/t_xoi_88f.css';
import '../../css/r/rfylp4bqz.css';
import '../../css/v/vwazgn8zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7g7y6boy"/><path class="qndnb7b2a"/><path class="kfbw_mbiu"/><path class="t_xoi_88f"/><path class="rfylp4bqz"/><path class="vwazgn8zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-bold-duotone"} {...others} />);
}

export default Component;
