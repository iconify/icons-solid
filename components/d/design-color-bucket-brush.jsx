import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0id_ybqh.css';
import '../../css/t/t6wfis5pu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k0id_ybqh"/><path class="t6wfis5pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-color-bucket-brush"} {...others} />);
}

export default Component;
