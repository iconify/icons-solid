import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0jte5bwq.css';
import '../../css/u/u738m78mn.css';
import '../../css/e/e8odnlcxx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f0jte5bwq"/><path class="u738m78mn"/><path class="e8odnlcxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tool-kit"} {...others} />);
}

export default Component;
