import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/str33hb3k.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="str33hb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:modify-poly"} {...others} />);
}

export default Component;
