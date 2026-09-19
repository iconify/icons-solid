import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k8vms3b0m.css';
import '../../css/b/b5xb-mgxl.css';
import '../../css/u/u7wt_xx-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k8vms3b0m"/><path class="b5xb-mgxl"/><path class="u7wt_xx-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:external-drive"} {...others} />);
}

export default Component;
