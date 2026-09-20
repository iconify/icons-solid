import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e6t48688w.css';
import '../../css/q/qbslvcbcz.css';
import '../../css/d/dl1-i9bhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e6t48688w"/><path class="qbslvcbcz"/><path class="dl1-i9bhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-remove"} {...others} />);
}

export default Component;
