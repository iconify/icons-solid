import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yysuhsbtx.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/z/zzu7z6b8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yysuhsbtx"/><path class="qr4ochb5c wm-s"/><path class="zzu7z6b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:star-off-duo"} {...others} />);
}

export default Component;
