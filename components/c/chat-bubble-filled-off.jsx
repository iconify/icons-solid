import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so5a6b.css';
import '../../css/t/t5pxry.css';
import '../../css/o/oxx-om.css';
import '../../css/p/p2_l7t.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGgjXEIdDQ"><path class="so5a6b t5pxry"/><path class="oxx-om p2_l7t t5pxry"/></mask></defs><path mask="url(#SVGgjXEIdDQ)" class="botfzx"/><path class="gd_4-q p2_l7t t5pxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-bubble-filled-off"} {...others} />);
}

export default Component;
