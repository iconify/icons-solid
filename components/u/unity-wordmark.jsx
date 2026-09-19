import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bujcfabcl.css';
import '../../css/p/p68_n_bch.css';
import '../../css/r/riwp_rwvj.css';
import '../../css/u/u04jombws.css';
import '../../css/x/x5rsn2cfn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bujcfabcl"/><path class="p68_n_bch"/><path class="riwp_rwvj"/><path class="u04jombws"/><path class="x5rsn2cfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:unity-wordmark"} {...others} />);
}

export default Component;
