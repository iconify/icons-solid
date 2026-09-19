import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zp0j2whzz.css';
import '../../css/n/nzks4w00p.css';
import '../../css/o/oqgz1ccyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zp0j2whzz"/><path class="nzks4w00p"/><path class="oqgz1ccyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-remove-02"} {...others} />);
}

export default Component;
