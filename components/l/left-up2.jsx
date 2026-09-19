import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scu44gudw.css';
import '../../css/z/zfka66bxw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="scu44gudw"/><path class="zfka66bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:left-up2"} {...others} />);
}

export default Component;
