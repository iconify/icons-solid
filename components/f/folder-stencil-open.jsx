import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hha2vm2py.css';
import '../../css/c/cdocj7brz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hha2vm2py"/><path class="cdocj7brz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-stencil-open"} {...others} />);
}

export default Component;
