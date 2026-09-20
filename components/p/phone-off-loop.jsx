import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/t/tfvpsr.css';
import '../../css/o/oxx-om.css';
import '../../css/q/qnwgpe.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGfEQolcWa"><path class="c5xdmn tfvpsr"/><path class="c5xdmn oxx-om qnwgpe"/></mask></defs><path mask="url(#SVGfEQolcWa)" class="botfzx"/><path class="c5xdmn gd_4-q qnwgpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:phone-off-loop"} {...others} />);
}

export default Component;
