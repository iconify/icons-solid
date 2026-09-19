import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsy7k0alc.css';
import '../../css/z/zt-51hcly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsy7k0alc"/><path class="zt-51hcly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:meteor"} {...others} />);
}

export default Component;
