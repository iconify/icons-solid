import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayb8wv.css';
import '../../css/c/c5xdmn.css';
import '../../css/z/zxndow.css';
import '../../css/i/ip662n.css';
import '../../css/s/s6_zry.css';
import '../../css/b/botfzx.css';
import '../../css/r/r59l5i.css';
import '../../css/s/so-from-46.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-2dk93e.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG12VxtdqC"><path class="ayb8wv c5xdmn zxndow"/><path class="c5xdmn ip662n zxndow"/><path class="c5xdmn s6_zry"/></mask></defs><path mask="url(#SVG12VxtdqC)" class="botfzx"/><path class="c5xdmn r59l5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:lightbulb-off-loop"} {...others} />);
}

export default Component;
