import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayb8wv.css';
import '../../css/c/c5xdmn.css';
import '../../css/z/zxndow.css';
import '../../css/i/ip662n.css';
import '../../css/b/bvmj9p.css';
import '../../css/y/y4gl7b.css';
import '../../css/b/botfzx.css';
import '../../css/w/wgacfi.css';
import '../../css/s/so-from-46.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGn8K2CGDg"><path class="ayb8wv c5xdmn zxndow"/><path class="c5xdmn ip662n zxndow"/><path class="bvmj9p c5xdmn y4gl7b"/></mask></defs><path mask="url(#SVGn8K2CGDg)" class="botfzx"/><path class="bvmj9p c5xdmn wgacfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:lightbulb-off"} {...others} />);
}

export default Component;
