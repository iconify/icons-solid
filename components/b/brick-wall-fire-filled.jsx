import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu4kwc0bq.css';
import '../../css/h/hc1hzibuo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu4kwc0bq"/><path clip-rule="evenodd" class="hc1hzibuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brick-wall-fire-filled"} {...others} />);
}

export default Component;
