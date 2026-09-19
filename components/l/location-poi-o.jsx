import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7pghdblc.css';
import '../../css/d/ddhwi2bsr.css';
import '../../css/z/zi6wn-bta.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="l7pghdblc"/><path class="ddhwi2bsr"/><path class="zi6wn-bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:location-poi-o"} {...others} />);
}

export default Component;
