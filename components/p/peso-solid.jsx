import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbeam29lh.css';
import '../../css/d/dubmsacdp.css';
import '../../css/l/l7dlcxybl.css';
import '../../css/y/ylf1gbb8r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 jbeam29lh"/><path class="clr-i-solid clr-i-solid-path-2 dubmsacdp"/><path class="clr-i-solid clr-i-solid-path-3 l7dlcxybl"/><path class="clr-i-solid clr-i-solid-path-4 ylf1gbb8r"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:peso-solid"} {...others} />);
}

export default Component;
