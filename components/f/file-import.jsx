import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nke9_abay.css';
import '../../css/g/g12w-t45h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nke9_abay"/><path class="g12w-t45h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-import"} {...others} />);
}

export default Component;
