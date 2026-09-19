import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er_zoepac.css';
import '../../css/z/zov54cbdm.css';
import '../../css/z/zz20r9bzu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 er_zoepac"/><path class="clr-i-outline clr-i-outline-path-2 zov54cbdm"/><path class="clr-i-outline clr-i-outline-path-3 zz20r9bzu"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:zoom-in-line"} {...others} />);
}

export default Component;
