import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tu4mulbmj.css';
import '../../css/f/f5dyf_bxd.css';
import '../../css/t/t2siutbbu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="tu4mulbmj"/><path class="f5dyf_bxd"/><path class="t2siutbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bell-pepper"} {...others} />);
}

export default Component;
