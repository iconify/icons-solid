import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr4r3o7xw.css';
import '../../css/u/ule9-cczc.css';
import '../../css/d/dapyzkble.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="lr4r3o7xw"/><rect class="ule9-cczc"/><rect class="dapyzkble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:menu-fill"} {...others} />);
}

export default Component;
