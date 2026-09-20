import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgckyq4_m.css';
import '../../css/s/sy9lcgb4a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qgckyq4_m"/><path class="sy9lcgb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:money-hand"} {...others} />);
}

export default Component;
