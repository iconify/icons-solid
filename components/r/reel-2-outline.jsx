import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcs6tehmj.css';
import '../../css/m/ml1bsrb5l.css';
import '../../css/f/fsv_d9evq.css';
import '../../css/d/dkkib-ewx.css';
import '../../css/v/ve8higxbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kcs6tehmj"/><path class="ml1bsrb5l"/><path class="fsv_d9evq"/><path class="dkkib-ewx"/><path class="ve8higxbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-2-outline"} {...others} />);
}

export default Component;
