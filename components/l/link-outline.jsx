import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luwxsnbji.css';
import '../../css/p/pqfht_-da.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="luwxsnbji"/><path class="pqfht_-da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:link-outline"} {...others} />);
}

export default Component;
