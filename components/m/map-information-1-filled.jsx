import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw--zdb9h.css';
import '../../css/k/k5i8z-b_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dw--zdb9h"/><path class="k5i8z-b_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-information-1-filled"} {...others} />);
}

export default Component;
