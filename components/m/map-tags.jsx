import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7f1umbwh.css';
import '../../css/e/e1yonmpfk.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="o7f1umbwh"/><path class="e1yonmpfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-tags"} {...others} />);
}

export default Component;
