import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7veribva.css';
import '../../css/b/bpjvsabdv.css';
import '../../css/k/koxyqebxp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g7veribva"/><path class="bpjvsabdv"/><path class="koxyqebxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:deepsource"} {...others} />);
}

export default Component;
