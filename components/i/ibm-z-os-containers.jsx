import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc-zz-dvu.css';
import '../../css/u/uh_772b6s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zc-zz-dvu"/><path class="uh_772b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-z-os-containers"} {...others} />);
}

export default Component;
