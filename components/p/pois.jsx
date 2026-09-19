import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7muz-b4d.css';
import '../../css/l/l7pghdblc.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="d7muz-b4d"/><path class="l7pghdblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:pois"} {...others} />);
}

export default Component;
