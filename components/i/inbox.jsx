import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qehczibes.css';
import '../../css/j/jh8tn8_9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qehczibes"/><path class="jh8tn8_9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:inbox"} {...others} />);
}

export default Component;
