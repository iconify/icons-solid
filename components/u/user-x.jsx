import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9p0gb1ju.css';
import '../../css/z/zpbr4rbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k9p0gb1ju"/><circle class="zpbr4rbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-x"} {...others} />);
}

export default Component;
