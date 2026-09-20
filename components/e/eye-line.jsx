import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfoobn32z.css';
import '../../css/m/mzwwu8c7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kfoobn32z"/><path class="mzwwu8c7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:eye-line"} {...others} />);
}

export default Component;
