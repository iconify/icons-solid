import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_yfmnbkd.css';
import '../../css/y/ya6awqbqs.css';
import '../../css/z/zu-vrnrjs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u_yfmnbkd"/><path class="ya6awqbqs"/><path class="zu-vrnrjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:type-48"} {...others} />);
}

export default Component;
