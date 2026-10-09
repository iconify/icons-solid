import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfzvxficx.css';
import '../../css/o/ohnac9bzs.css';
import '../../css/u/ut3qidboj.css';
import '../../css/j/jw3l0hbdf.css';
import '../../css/d/d0e77zs9f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rfzvxficx"/><path class="ohnac9bzs"/><path class="ut3qidboj"/><path class="jw3l0hbdf"/><path class="d0e77zs9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-centre-cooling-48"} {...others} />);
}

export default Component;
