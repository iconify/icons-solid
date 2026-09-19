import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/optge0b5p.css';
import '../../css/b/bu36qkbnj.css';
import '../../css/x/x72nze-0i.css';
import '../../css/a/ad-cz_b4j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="optge0b5p"/><path class="bu36qkbnj"/><ellipse transform="rotate(-45 255.99 175.996)" class="x72nze-0i"/><path class="ad-cz_b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:business-outline"} {...others} />);
}

export default Component;
