import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm59sjb2h.css';
import '../../css/s/sn9k1h9dt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm59sjb2h"/><path class="sn9k1h9dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:chart-line"} {...others} />);
}

export default Component;
