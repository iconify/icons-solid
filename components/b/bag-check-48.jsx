import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb2gho-_w.css';
import '../../css/z/ztjblhbxw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cb2gho-_w"/><path class="ztjblhbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bag-check-48"} {...others} />);
}

export default Component;
