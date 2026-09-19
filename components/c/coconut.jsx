import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0bbksaqk.css';
import '../../css/u/uyquv455s.css';
import '../../css/p/pumxzhblo.css';
import '../../css/o/o1y7wxfvm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="t0bbksaqk"/><path class="uyquv455s"/><path class="pumxzhblo"/><path class="o1y7wxfvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:coconut"} {...others} />);
}

export default Component;
