import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_-qv56wr.css';
import '../../css/o/oprif9x0m.css';
import '../../css/n/n4v5j3f2i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="t_-qv56wr"/><path class="oprif9x0m"/><path clip-rule="evenodd" class="n4v5j3f2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:closed-book"} {...others} />);
}

export default Component;
