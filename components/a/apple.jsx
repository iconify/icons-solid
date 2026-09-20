import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oe2innbyk.css';
import '../../css/n/n4dvrioxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oe2innbyk"/><path class="n4dvrioxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:apple"} {...others} />);
}

export default Component;
