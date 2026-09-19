import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ejn90-baf.css';
import '../../css/m/mw4ezez-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ejn90-baf"/><path class="mw4ezez-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sticky-note-02"} {...others} />);
}

export default Component;
