import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi6_f9yez.css';
import '../../css/o/o4sar_bie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xi6_f9yez"/><path clip-rule="evenodd" class="o4sar_bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-cancel-rounded-outline"} {...others} />);
}

export default Component;
