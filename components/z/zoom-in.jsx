import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_8q9z4vg.css';
import '../../css/o/oof_74yzf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="x_8q9z4vg"/><path class="oof_74yzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:zoom-in"} {...others} />);
}

export default Component;
