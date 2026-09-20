import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd9c8clmb.css';
import '../../css/m/mlljs5b8w.css';
import '../../css/z/zew23veae.css';
import '../../css/a/a-gf5y89p.css';
import '../../css/d/d8s3b-zbx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vd9c8clmb"/><path class="mlljs5b8w"/><path class="zew23veae"/><path class="a-gf5y89p"/><path class="d8s3b-zbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:speaking-head"} {...others} />);
}

export default Component;
