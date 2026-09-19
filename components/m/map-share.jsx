import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7ts5db7w.css';
import '../../css/g/gu3211y0f.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="w7ts5db7w"/><path class="gu3211y0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-share"} {...others} />);
}

export default Component;
