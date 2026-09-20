import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge-jeq6zd.css';
import '../../css/m/mexy6lbof.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ge-jeq6zd"/><path class="mexy6lbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-gradle-open"} {...others} />);
}

export default Component;
