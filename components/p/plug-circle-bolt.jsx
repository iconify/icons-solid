import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf82jj3qp.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="lf82jj3qp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:plug-circle-bolt"} {...others} />);
}

export default Component;
