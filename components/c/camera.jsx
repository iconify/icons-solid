import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvt-etbdx.css';
import '../../css/s/sh3jq6b7q.css';
import '../../css/g/gr0sanbkg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zvt-etbdx"/><path class="sh3jq6b7q"/><ellipse class="gr0sanbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:camera"} {...others} />);
}

export default Component;
