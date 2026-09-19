import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf39cbn8y.css';
import '../../css/u/uhsthdc5f.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="yf39cbn8y"/><path class="uhsthdc5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-share-alt"} {...others} />);
}

export default Component;
