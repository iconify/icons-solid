import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfnfvbmpm.css';
import '../../css/t/t_xoi_88f.css';
import '../../css/r/rfylp4bqz.css';
import '../../css/v/vwazgn8zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jfnfvbmpm"/><path class="t_xoi_88f"/><path class="rfylp4bqz"/><path class="vwazgn8zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-bold"} {...others} />);
}

export default Component;
