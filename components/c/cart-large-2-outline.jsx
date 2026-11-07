import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wpuo5f7ao.css';
import '../../css/v/vw0odjbmb.css';
import '../../css/j/jkmhhzb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wpuo5f7ao"/><path class="vw0odjbmb"/><path class="jkmhhzb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-2-outline"} {...others} />);
}

export default Component;
