import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sh-jwqb_w.css';
import '../../css/s/sg-e6fy6n.css';
import '../../css/x/xlpf8db-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="sh-jwqb_w"/><path class="sg-e6fy6n"/><path class="xlpf8db-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dim-sum-02"} {...others} />);
}

export default Component;
