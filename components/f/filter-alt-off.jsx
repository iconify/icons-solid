import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/f/fhjn7n.css';
import '../../css/z/zxndow.css';
import '../../css/t/tj796y.css';
import '../../css/o/otlizu.css';
import '../../css/d/dw7e4l.css';
import '../../css/l/lwtq5s.css';
import '../../css/b/botfzx.css';
import '../../css/r/r5412d.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGzgHVsdWf"><path class="c5xdmn fhjn7n zxndow"/><path class="c5xdmn tj796y zxndow"/><path class="c5xdmn otlizu zxndow"/><path class="c5xdmn dw7e4l lwtq5s"/></mask></defs><path mask="url(#SVGzgHVsdWf)" class="botfzx"/><path class="c5xdmn dw7e4l r5412d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:filter-alt-off"} {...others} />);
}

export default Component;
