import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i2bj1m5uc.css';
import '../../css/m/mhem-3zvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i2bj1m5uc"/><path class="mhem-3zvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-terminal-02"} {...others} />);
}

export default Component;
