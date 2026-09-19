import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/f3-50ui7y.css';
import '../../css/p/pcrzkzk_h.css';
import '../../css/a/aguowybsh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="f3-50ui7y"/><path class="pcrzkzk_h"/><path class="aguowybsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-outgoing"} {...others} />);
}

export default Component;
