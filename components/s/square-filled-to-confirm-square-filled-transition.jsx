import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7dawc.css';
import '../../css/t/t5pxry.css';
import '../../css/o/ovwh-q.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-14.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGepJYqeIi"><path class="p7dawc t5pxry"/><path class="ovwh-q t5pxry"/></mask></defs><path mask="url(#SVGepJYqeIi)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:square-filled-to-confirm-square-filled-transition"} {...others} />);
}

export default Component;
