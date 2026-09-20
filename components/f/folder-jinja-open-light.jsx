import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnxr3dbjd.css';
import '../../css/x/x4maqhbtx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bnxr3dbjd"/><path class="x4maqhbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-jinja-open-light"} {...others} />);
}

export default Component;
