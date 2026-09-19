import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vlhp-dbzf.css';
import '../../css/l/lw413bpzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vlhp-dbzf"/><path class="lw413bpzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:phone-lock"} {...others} />);
}

export default Component;
