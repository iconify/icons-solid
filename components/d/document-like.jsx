import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-kyedw0o.css';
import '../../css/g/giwsujbel.css';
import '../../css/x/xy2w34n6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s-kyedw0o"/><path class="giwsujbel"/><path class="xy2w34n6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:document-like"} {...others} />);
}

export default Component;
