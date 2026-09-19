import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyhh9xlgt.css';
import '../../css/m/mgwjp-z-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zyhh9xlgt"/><path class="mgwjp-z-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:trash-2-outline"} {...others} />);
}

export default Component;
