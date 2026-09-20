import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6bv3cbvb.css';
import '../../css/u/uy6molruc.css';
import '../../css/e/efjg-jbol.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n6bv3cbvb"/><path class="uy6molruc"/><path class="efjg-jbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reitti"} {...others} />);
}

export default Component;
