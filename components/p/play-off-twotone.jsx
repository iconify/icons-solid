import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_i_8c.css';
import '../../css/t/t5pxry.css';
import '../../css/c/ccwijg.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-38.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGzkWq2dsI"><path class="p_i_8c t5pxry"/><path class="ccwijg oxx-om t5pxry"/></mask></defs><path mask="url(#SVGzkWq2dsI)" class="botfzx"/><path class="ccwijg gd_4-q t5pxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:play-off-twotone"} {...others} />);
}

export default Component;
