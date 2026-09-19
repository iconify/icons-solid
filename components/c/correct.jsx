import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at03s0y1z.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="at03s0y1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:correct"} {...others} />);
}

export default Component;
