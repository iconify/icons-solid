import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b16rg8bcl.css';
import '../../css/a/aqnacybqe.css';
import '../../css/q/qngp5f3zk.css';
import '../../css/q/q48y_3egp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b16rg8bcl"/><path class="aqnacybqe"/><path class="qngp5f3zk"/><path class="q48y_3egp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mountain-cableway"} {...others} />);
}

export default Component;
