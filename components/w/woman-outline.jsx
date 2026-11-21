import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5hel5j6j.css';
import '../../css/f/f5kqw9b6l.css';
import '../../css/o/o0lqhvmmi.css';
import '../../css/k/k8brvnbck.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h5hel5j6j"/><path class="f5kqw9b6l"/><circle class="o0lqhvmmi"/><path class="k8brvnbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:woman-outline"} {...others} />);
}

export default Component;
