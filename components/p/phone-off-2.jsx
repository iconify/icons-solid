import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpmv5nbra.css';
import '../../css/h/h5bun4ehf.css';
import '../../css/h/hm6t7gb2c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qpmv5nbra"/><path class="h5bun4ehf"/><path class="hm6t7gb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:phone-off-2"} {...others} />);
}

export default Component;
