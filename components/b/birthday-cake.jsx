import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jlkjdbboa.css';
import '../../css/v/vgrcg0npx.css';
import '../../css/n/nmnx5obqv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jlkjdbboa"/><path class="vgrcg0npx"/><path class="nmnx5obqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:birthday-cake"} {...others} />);
}

export default Component;
