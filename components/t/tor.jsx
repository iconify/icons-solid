import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxvlzcc5k.css';
import '../../css/a/apb1-vbtb.css';
import '../../css/k/k-dy_gbdp.css';
import '../../css/c/catopm8pb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yxvlzcc5k"/><path class="apb1-vbtb"/><path class="k-dy_gbdp"/><path class="catopm8pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tor"} {...others} />);
}

export default Component;
