import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/o/ockota.css';
import '../../css/z/zxndow.css';
import '../../css/k/kj2bfh.css';
import '../../css/o/oeeggn.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/f/fo5bbb.css';
import '../../css/s/so-from-28.css';
import '../../css/d/d-7xq8qc.css';
import '../../css/d/d-7h3jep.css';
import '../../css/f/fade-qhlvwz.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGJFeVyu6j"><path class="c5xdmn ockota zxndow"/><path class="c5xdmn kj2bfh zxndow"/><path class="c5xdmn oeeggn t-ne3j"/></mask></defs><path mask="url(#SVGJFeVyu6j)" class="botfzx"/><path class="c5xdmn fo5bbb t-ne3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:hazard-lights-off-loop"} {...others} />);
}

export default Component;
