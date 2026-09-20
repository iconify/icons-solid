import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lkjyl7b_d.css';
import '../../css/y/yw2cpq6yz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lkjyl7b_d"/><path class="yw2cpq6yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hearing-deaf-1"} {...others} />);
}

export default Component;
