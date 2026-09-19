import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z4l1ukb1f.css';
import '../../css/m/m5fg6epse.css';
import '../../css/z/z3gnu0b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="z4l1ukb1f"/><path class="m5fg6epse"/><path class="z3gnu0b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:telescope-02"} {...others} />);
}

export default Component;
