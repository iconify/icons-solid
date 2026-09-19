import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6wz8cb3t.css';
import '../../css/o/owu91ypwk.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="t6wz8cb3t"/><path class="owu91ypwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:eye-off-fill"} {...others} />);
}

export default Component;
