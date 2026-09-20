import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-4cqm.css';
import '../../css/t/t5pxry.css';
import '../../css/o/oxx-om.css';
import '../../css/q/qjy1lv.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG1F6EyceA"><path class="g-4cqm t5pxry"/><path class="oxx-om qjy1lv t5pxry"/></mask></defs><path mask="url(#SVG1F6EyceA)" class="botfzx"/><path class="gd_4-q qjy1lv t5pxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:phone-off-filled-loop"} {...others} />);
}

export default Component;
