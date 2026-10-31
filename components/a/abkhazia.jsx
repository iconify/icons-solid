import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/our1udbzf.css';
import '../../css/j/j8s-i4d1w.css';
import '../../css/c/czx55d_pt.css';
import '../../css/z/zbr5z4smz.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="our1udbzf"/><path class="j8s-i4d1w"/><path class="czx55d_pt"/><path class="zbr5z4smz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:abkhazia"} {...others} />);
}

export default Component;
