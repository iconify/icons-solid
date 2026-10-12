import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l46lvfrxi.css';
import '../../css/g/g07kyqb8d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l46lvfrxi"/><path class="g07kyqb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-zip-stroke-20"} {...others} />);
}

export default Component;
