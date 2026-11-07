import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzutfeb8f.css';
import '../../css/d/div7n52ni.css';
import '../../css/g/glzhwh5ys.css';
import '../../css/q/q9c6evmhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzutfeb8f"/><path class="div7n52ni"/><path class="glzhwh5ys"/><path class="q9c6evmhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-trash-bold-duotone"} {...others} />);
}

export default Component;
