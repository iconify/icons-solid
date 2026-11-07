import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc4jqtbfv.css';
import '../../css/n/nt_tpccog.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pc4jqtbfv"/><path class="nt_tpccog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-bold"} {...others} />);
}

export default Component;
