import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yxuglxb_b.css';
import '../../css/h/h3ibz_bvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yxuglxb_b"/><path class="h3ibz_bvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alarm-average"} {...others} />);
}

export default Component;
