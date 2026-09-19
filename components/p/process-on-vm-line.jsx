import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud-qa-b2f.css';
import '../../css/p/pkuhlsb_t.css';
import '../../css/t/t5je5wb4q.css';
import '../../css/y/y_v3hnb2o.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ud-qa-b2f"/><path class="clr-i-outline clr-i-outline-path-2 pkuhlsb_t"/><path class="clr-i-outline clr-i-outline-path-3 t5je5wb4q"/><path class="clr-i-outline clr-i-outline-path-4 y_v3hnb2o"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:process-on-vm-line"} {...others} />);
}

export default Component;
