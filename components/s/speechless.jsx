import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0qkxxb-q.css';
import '../../css/u/u0bzg8byf.css';
import '../../css/v/v4-7eu8rv.css';
import '../../css/z/ztmfb6bwu.css';

const viewBox = {"width":64,"height":64};
const content = `<circle class="u0qkxxb-q"/><circle class="u0bzg8byf"/><path class="v4-7eu8rv"/><path class="ztmfb6bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:speechless"} {...others} />);
}

export default Component;
