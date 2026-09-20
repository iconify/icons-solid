import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9n2fpbvo.css';
import '../../css/h/hpi6sokwb.css';
import '../../css/r/rwtfg_k-x.css';
import '../../css/x/x1zr3i0tt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9n2fpbvo"/><path class="hpi6sokwb"/><path class="rwtfg_k-x"/><path class="x1zr3i0tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-crazy"} {...others} />);
}

export default Component;
