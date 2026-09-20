import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfqbixbqc.css';
import '../../css/p/pxh-139-k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bfqbixbqc"/><path clip-rule="evenodd" class="pxh-139-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:browser-website-1-solid"} {...others} />);
}

export default Component;
