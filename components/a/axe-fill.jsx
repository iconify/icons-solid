import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt-9i5kip.css';
import '../../css/l/ldidwdo6o.css';
import '../../css/d/dby2-abgs.css';
import '../../css/q/qx4r4bcyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kt-9i5kip"/><path class="ldidwdo6o"/><path class="dby2-abgs"/><path class="qx4r4bcyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:axe-fill"} {...others} />);
}

export default Component;
