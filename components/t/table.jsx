import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpeh4lb3t.css';
import '../../css/p/pan8axb2r.css';
import '../../css/k/kfb89rzgg.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="fpeh4lb3t"/><path class="pan8axb2r"/><path class="kfb89rzgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:table"} {...others} />);
}

export default Component;
