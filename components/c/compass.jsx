import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0hqxm.css';
import '../../css/k/kmed5s.css';
import '../../css/c/cwy86a.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-tcc6vx.css';
import '../../css/d/d-67r94s.css';
import '../../css/t/tr-g4nb9z.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGVBm5DdAt"><path class="l0hqxm"/><path class="kmed5s"/><circle class="cwy86a"/></mask></defs><path mask="url(#SVGVBm5DdAt)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:compass"} {...others} />);
}

export default Component;
