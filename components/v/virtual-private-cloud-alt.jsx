import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_ck-kb7o.css';
import '../../css/k/kyehcvbsc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f_ck-kb7o"/><path class="kyehcvbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:virtual-private-cloud-alt"} {...others} />);
}

export default Component;
