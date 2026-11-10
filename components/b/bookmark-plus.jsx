import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ac4s38qdt.css';
import '../../css/q/qfzg3f4uh.css';
import '../../css/q/qojmgs-3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ac4s38qdt"/><path class="qfzg3f4uh"/><path class="qojmgs-3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bookmark-plus"} {...others} />);
}

export default Component;
