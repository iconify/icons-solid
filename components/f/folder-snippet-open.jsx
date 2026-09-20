import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv8-lrn5y.css';
import '../../css/u/uohrmebri.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xv8-lrn5y"/><path class="uohrmebri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-snippet-open"} {...others} />);
}

export default Component;
