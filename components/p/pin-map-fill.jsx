import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pkj8k7bav.css';
import '../../css/h/h04wcsbbe.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="pkj8k7bav"/><path class="h04wcsbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pin-map-fill"} {...others} />);
}

export default Component;
