import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfdq1hqyb.css';
import '../../css/b/b_1t8ab1f.css';
import '../../css/p/pu2xhg2fk.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kfdq1hqyb"/><path class="b_1t8ab1f"/><path class="pu2xhg2fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kibana"} {...others} />);
}

export default Component;
