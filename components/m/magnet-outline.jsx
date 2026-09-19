import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zllmftbax.css';
import '../../css/k/kot2fq0bc.css';
import '../../css/a/a4kaplbpc.css';
import '../../css/k/k2rcg5b0a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zllmftbax"/><path class="kot2fq0bc"/><path class="a4kaplbpc"/><path class="k2rcg5b0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:magnet-outline"} {...others} />);
}

export default Component;
