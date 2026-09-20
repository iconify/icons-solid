import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/e_txy1kaa.css';
import '../../css/i/i8ya54elj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="e_txy1kaa"/><path class="i8ya54elj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:tree-3"} {...others} />);
}

export default Component;
