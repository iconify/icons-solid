import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgzdgcqyr.css';
import '../../css/j/jmo8dnbwh.css';
import '../../css/k/ki-cu7x0w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hgzdgcqyr"/><path class="jmo8dnbwh"/><path class="ki-cu7x0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:haskell-wordmark"} {...others} />);
}

export default Component;
