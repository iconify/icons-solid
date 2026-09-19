import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx4b9vbux.css';
import '../../css/m/m24l3fbsc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dx4b9vbux"/><path class="m24l3fbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:accumulation-snow"} {...others} />);
}

export default Component;
