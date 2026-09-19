import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmg2hgb8g.css';
import '../../css/d/dcxprjszn.css';
import '../../css/s/sjrvryb6o.css';
import '../../css/h/hgv60rb3g.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="pmg2hgb8g"/><circle class="dcxprjszn"/><circle class="sjrvryb6o"/><path class="hgv60rb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:share-social-outline"} {...others} />);
}

export default Component;
