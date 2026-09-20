import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7n2shh1v.css';
import '../../css/l/lf6x23bsf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p7n2shh1v"/><path class="lf6x23bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-event"} {...others} />);
}

export default Component;
