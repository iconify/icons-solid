import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7a28wb_h.css';
import '../../css/c/ch0xn7tua.css';
import '../../css/d/d2gksqian.css';
import '../../css/m/mu410db3i.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="n7a28wb_h"/><path class="ch0xn7tua"/><path class="d2gksqian"/><path class="mu410db3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:control-lun-line"} {...others} />);
}

export default Component;
