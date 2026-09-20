import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf_1fb-pf.css';
import '../../css/p/po8eo_bgh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qf_1fb-pf"/><path class="po8eo_bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:anchor-top-right-16"} {...others} />);
}

export default Component;
