import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4-7eu8rv.css';
import '../../css/f/f84x_gb3e.css';
import '../../css/o/of7d1zb9r.css';
import '../../css/j/jf59lk74x.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="v4-7eu8rv"/><circle class="f84x_gb3e"/><circle class="of7d1zb9r"/><path class="jf59lk74x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:tounge"} {...others} />);
}

export default Component;
