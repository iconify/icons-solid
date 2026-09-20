import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9r54cbek.css';
import '../../css/w/wsm_8oqcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9r54cbek"/><path class="wsm_8oqcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:showers-fill"} {...others} />);
}

export default Component;
