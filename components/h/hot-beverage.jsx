import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8yjq9b6b.css';
import '../../css/d/d-y6jsx4h.css';
import '../../css/p/p2ag53bhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z8yjq9b6b"/><path class="d-y6jsx4h"/><path class="p2ag53bhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:hot-beverage"} {...others} />);
}

export default Component;
