import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzc9eyb8n.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="uzc9eyb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:screen-dub2"} {...others} />);
}

export default Component;
