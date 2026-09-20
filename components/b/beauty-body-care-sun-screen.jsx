import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6jafybzb.css';
import '../../css/q/qq3dmvb4d.css';
import '../../css/s/swx-crbgj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i6jafybzb"/><path class="qq3dmvb4d"/><path class="swx-crbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-body-care-sun-screen"} {...others} />);
}

export default Component;
