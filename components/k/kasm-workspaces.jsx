import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azrh3xblv.css';
import '../../css/y/y6a5k_bnq.css';
import '../../css/y/y52yl1_4n.css';
import '../../css/f/fmd5ecb5v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="azrh3xblv"/><path class="y6a5k_bnq"/><path class="y52yl1_4n"/><path class="fmd5ecb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kasm-workspaces"} {...others} />);
}

export default Component;
