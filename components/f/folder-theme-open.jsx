import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haf1n5bdl.css';
import '../../css/t/t38mnib2r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="haf1n5bdl"/><path class="t38mnib2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-theme-open"} {...others} />);
}

export default Component;
