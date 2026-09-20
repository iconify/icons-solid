import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s_h2a60vo.css';
import '../../css/m/m51bgsblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s_h2a60vo"/><path class="m51bgsblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cashier-machine-2"} {...others} />);
}

export default Component;
