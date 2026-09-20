import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whco19wwk.css';

const viewBox = {"width":1024,"height":130};
const content = `<path class="whco19wwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-workspace-wordmark-dark"} {...others} />);
}

export default Component;
