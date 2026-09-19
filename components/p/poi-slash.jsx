import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7pghdblc.css';
import '../../css/w/wu7dgpbsv.css';
import '../../css/b/b2tobl9de.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="l7pghdblc"/><path class="wu7dgpbsv"/><path class="b2tobl9de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:poi-slash"} {...others} />);
}

export default Component;
