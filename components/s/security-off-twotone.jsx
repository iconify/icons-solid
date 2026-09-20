import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb4ecm.css';
import '../../css/t/t5pxry.css';
import '../../css/i/i8_pay.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGaQN5Mdql"><path class="cb4ecm t5pxry"/><path class="i8_pay oxx-om t5pxry"/></mask></defs><path mask="url(#SVGaQN5Mdql)" class="botfzx"/><path class="gd_4-q i8_pay t5pxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:security-off-twotone"} {...others} />);
}

export default Component;
