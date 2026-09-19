import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amb6xmb9p.css';
import '../../css/b/bt5hmxdsg.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="amb6xmb9p"/><path class="bt5hmxdsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:world-folder-o"} {...others} />);
}

export default Component;
