import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnym-b5im.css';
import '../../css/t/t15jjd-vi.css';
import '../../css/l/l71ep0bsf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="vnym-b5im"/><path class="t15jjd-vi"/><path class="l71ep0bsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:baseball"} {...others} />);
}

export default Component;
