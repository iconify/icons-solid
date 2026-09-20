import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p5-1p8o8f.css';
import '../../css/k/kj1x77bdk.css';
import '../../css/k/k94siob2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="p5-1p8o8f"/><path class="kj1x77bdk"/><path class="k94siob2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:3ds-max-logo"} {...others} />);
}

export default Component;
