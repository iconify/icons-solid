import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x-a911bos.css';
import '../../css/e/e_7yw6uch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x-a911bos"/><path class="e_7yw6uch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-favourite-02"} {...others} />);
}

export default Component;
