import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu4kwc0bq.css';
import '../../css/s/sma_z600n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu4kwc0bq"/><path clip-rule="evenodd" class="sma_z600n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brick-wall-fire-filled"} {...others} />);
}

export default Component;
