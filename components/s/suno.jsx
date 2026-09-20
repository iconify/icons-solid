import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7ra1sb4x.css';

const viewBox = {"width":122,"height":122};
const content = `<path clip-rule="evenodd" class="a7ra1sb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:suno"} {...others} />);
}

export default Component;
