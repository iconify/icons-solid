import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuhezrb5q.css';
import '../../css/r/rjngqpptk.css';
import '../../css/u/uhmb74z0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cuhezrb5q"/><circle class="rjngqpptk"/><path class="uhmb74z0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:product-classes"} {...others} />);
}

export default Component;
