import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf8n7mb7y.css';
import '../../css/z/zcurb14eq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wf8n7mb7y"/><path class="zcurb14eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jeedom"} {...others} />);
}

export default Component;
