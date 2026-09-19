import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejohuhj5q.css';
import '../../css/f/f5gd0xblq.css';
import '../../css/a/anhzvlb7r.css';
import '../../css/o/o6scyib_h.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ejohuhj5q"/><path class="clr-i-outline clr-i-outline-path-2 f5gd0xblq"/><path class="anhzvlb7r clr-i-outline clr-i-outline-path-3"/><path class="clr-i-outline clr-i-outline-path-4 o6scyib_h"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:bullseye-line"} {...others} />);
}

export default Component;
