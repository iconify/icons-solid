import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/txdar5bff.css';
import '../../css/u/u8f2-wohm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="txdar5bff"/><path class="u8f2-wohm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plane"} {...others} />);
}

export default Component;
