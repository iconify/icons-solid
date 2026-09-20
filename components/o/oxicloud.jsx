import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwr2epb-t.css';
import '../../css/s/swf58-3sr.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vwr2epb-t"/><path class="swf58-3sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oxicloud"} {...others} />);
}

export default Component;
