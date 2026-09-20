import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix3d72cff.css';
import '../../css/o/ogtj31bng.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ix3d72cff"/><path class="ogtj31bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-kotlin-open"} {...others} />);
}

export default Component;
