import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rgifae4or.css';
import '../../css/k/k30ugsftl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rgifae4or"/><path class="k30ugsftl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:smart-key"} {...others} />);
}

export default Component;
