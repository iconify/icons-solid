import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7dawc.css';
import '../../css/t/t5pxry.css';
import '../../css/f/fb-lrs.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGNgUhvsBR"><path class="p7dawc t5pxry"/><path class="fb-lrs t5pxry"/></mask></defs><path mask="url(#SVGNgUhvsBR)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:confirm-square-filled-to-square-filled-transition"} {...others} />);
}

export default Component;
