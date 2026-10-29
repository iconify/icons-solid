import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-ap1ibor.css';
import '../../css/x/xf5918bfk.css';
import '../../css/x/x7t-dpbyq.css';
import '../../css/r/rnj7uox_k.css';
import '../../css/c/cb0k32w5x.css';
import '../../css/h/hnswz3bwi.css';
import '../../css/b/bjjuydrsk.css';
import '../../css/i/iotu2o5ck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-ap1ibor wm-shadow"/><path class="wm-k xf5918bfk"/><path class="wm-k x7t-dpbyq"/><path class="rnj7uox_k wm-a"/><path class="cb0k32w5x wm-a"/><path class="hnswz3bwi wm-a"/><path class="bjjuydrsk wm-a"/><path class="iotu2o5ck wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:percent"} {...others} />);
}

export default Component;
