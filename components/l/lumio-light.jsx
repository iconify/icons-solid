import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r22fqh72r.css';
import '../../css/o/o4k3kffuo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r22fqh72r"/><path class="o4k3kffuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lumio-light"} {...others} />);
}

export default Component;
