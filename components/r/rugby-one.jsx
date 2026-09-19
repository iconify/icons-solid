import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/e/etnnjd0_i.css';
import '../../css/u/u0oxmulca.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="etnnjd0_i"/><path class="u0oxmulca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rugby-one"} {...others} />);
}

export default Component;
