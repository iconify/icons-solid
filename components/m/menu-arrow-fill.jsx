import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opee3bbzg.css';
import '../../css/k/ko-zgkb5p.css';
import '../../css/q/q044p6bsk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="opee3bbzg"/><rect class="ko-zgkb5p"/><rect class="q044p6bsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:menu-arrow-fill"} {...others} />);
}

export default Component;
