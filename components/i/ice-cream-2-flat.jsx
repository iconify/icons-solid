import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ak_jjqnlm.css';
import '../../css/q/q6trnobms.css';
import '../../css/q/qry3u0blb.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ak_jjqnlm"/><path class="q6trnobms"/><path class="qry3u0blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:ice-cream-2-flat"} {...others} />);
}

export default Component;
