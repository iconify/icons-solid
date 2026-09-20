import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oc07qtb8a.css';
import '../../css/p/pp_g3wbcg.css';
import '../../css/x/xoxizzbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oc07qtb8a"/><path class="pp_g3wbcg"/><path class="xoxizzbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:performance-increase-clipboard"} {...others} />);
}

export default Component;
