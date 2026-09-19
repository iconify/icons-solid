import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm9z_xbka.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="bm9z_xbka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:debug-connected-compact"} {...others} />);
}

export default Component;
