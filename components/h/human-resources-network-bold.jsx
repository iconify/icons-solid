import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdjwxdbku.css';
import '../../css/b/bpczg_bnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdjwxdbku"/><path class="bpczg_bnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-network-bold"} {...others} />);
}

export default Component;
