import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cizd5jm2r.css';
import '../../css/l/li384bm7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cizd5jm2r"/><path class="li384bm7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pie"} {...others} />);
}

export default Component;
