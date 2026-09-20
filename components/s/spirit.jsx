import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coopzbbjy.css';
import '../../css/n/nr--xqbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coopzbbjy"/><path clip-rule="evenodd" class="nr--xqbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:spirit"} {...others} />);
}

export default Component;
