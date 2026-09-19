import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eqfpa-b2r.css';
import '../../css/l/lnq05acsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eqfpa-b2r"/><path class="lnq05acsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-code-corner"} {...others} />);
}

export default Component;
