import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lz_qbtbon.css';
import '../../css/z/z3dgrwb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lz_qbtbon"/><path class="z3dgrwb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:savings"} {...others} />);
}

export default Component;
