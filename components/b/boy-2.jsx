import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek4h0_bfu.css';
import '../../css/o/olwd66dga.css';
import '../../css/s/sg9fdzxjy.css';
import '../../css/s/swux9bb0c.css';
import '../../css/i/iv56myiic.css';
import '../../css/a/aytuk77uv.css';
import '../../css/b/bofxwhh-s.css';
import '../../css/r/ri8y_dbdr.css';
import '../../css/n/nft7ddbxq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ek4h0_bfu"/><path class="olwd66dga"/><path class="sg9fdzxjy"/><path class="swux9bb0c"/><path class="iv56myiic"/><path class="aytuk77uv"/><path class="bofxwhh-s"/><path class="ri8y_dbdr"/><path class="nft7ddbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:boy-2"} {...others} />);
}

export default Component;
