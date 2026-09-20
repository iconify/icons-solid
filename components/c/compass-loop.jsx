import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0hqxm.css';
import '../../css/c/cqe7mx.css';
import '../../css/c/cwy86a.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-tcc6vx.css';
import '../../css/d/d-67r94s.css';
import '../../css/t/tr--s0y2h.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGjc7Xpdqe"><path class="l0hqxm"/><path class="cqe7mx"/><circle class="cwy86a"/></mask></defs><path mask="url(#SVGjc7Xpdqe)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:compass-loop"} {...others} />);
}

export default Component;
