import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sz2gx2bvd.css';
import '../../css/e/e0u3qtbzv.css';
import '../../css/z/zs843lqwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sz2gx2bvd"/><path class="e0u3qtbzv"/><path class="zs843lqwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:octagon-alert-duotone"} {...others} />);
}

export default Component;
