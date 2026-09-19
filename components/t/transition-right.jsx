import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/og04bz4re.css';
import '../../css/t/tp8facqac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="og04bz4re"/><path class="tp8facqac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:transition-right"} {...others} />);
}

export default Component;
