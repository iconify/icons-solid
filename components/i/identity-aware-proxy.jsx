import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq96hfbrb.css';
import '../../css/e/eo08m305v.css';
import '../../css/w/wmph3wb3a.css';
import '../../css/u/u2o_5bhcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq96hfbrb"/><path class="eo08m305v"/><path class="wmph3wb3a"/><path class="u2o_5bhcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:identity-aware-proxy"} {...others} />);
}

export default Component;
