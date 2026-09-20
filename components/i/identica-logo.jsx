import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xm8qymblg.css';
import '../../css/k/k__40-bij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="xm8qymblg"/><path class="k__40-bij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:identica-logo"} {...others} />);
}

export default Component;
