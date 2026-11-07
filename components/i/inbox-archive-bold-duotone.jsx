import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/v/vj271db3h.css';
import '../../css/b/b1eoogomv.css';
import '../../css/u/um80ms1wu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="vj271db3h"/><path class="b1eoogomv"/><path class="um80ms1wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-archive-bold-duotone"} {...others} />);
}

export default Component;
