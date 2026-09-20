import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v538bx.css';
import '../../css/c/cfdtzv.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d--8d_6b.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGL9Ab9dwT"><path class="v538bx"/><path class="cfdtzv"/></mask></defs><path mask="url(#SVGL9Ab9dwT)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:youtube-filled"} {...others} />);
}

export default Component;
