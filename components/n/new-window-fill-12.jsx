import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3k1-4h4j.css';
import '../../css/k/k0n5xoqvf.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="b3k1-4h4j"/><path class="k0n5xoqvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:new-window-fill-12"} {...others} />);
}

export default Component;
