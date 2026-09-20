import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5x6ze.css';
import '../../css/z/zjye1e.css';
import '../../css/v/vkmsve.css';
import '../../css/k/k7jtot.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-12.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5x6ze zjye1e"/><path class="vkmsve w5x6ze"/><path class="k7jtot w5x6ze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:grid-3-twotone"} {...others} />);
}

export default Component;
