import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0vmx-8pt.css';

const viewBox = {"width":28,"height":32};
const content = `<path class="k0vmx-8pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:hotairballoon"} {...others} />);
}

export default Component;
