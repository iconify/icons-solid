import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9jj03bpd.css';
import '../../css/x/xwlvzbvrp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m9jj03bpd"/><path class="xwlvzbvrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-certificate"} {...others} />);
}

export default Component;
