import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjv0s75cj.css';
import '../../css/j/jx1h125ko.css';
import '../../css/i/ia9fiz6uq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cjv0s75cj"/><path clip-rule="evenodd" class="jx1h125ko"/><path class="ia9fiz6uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:integrated-data-and-research-24px"} {...others} />);
}

export default Component;
