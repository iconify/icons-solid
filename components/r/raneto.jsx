import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vaapy-bnd.css';
import '../../css/z/zl8qabcpl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vaapy-bnd"/><path class="zl8qabcpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raneto"} {...others} />);
}

export default Component;
