import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubpwl-aai.css';
import '../../css/t/tfo27y8rt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubpwl-aai"/><path class="tfo27y8rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sd-card"} {...others} />);
}

export default Component;
