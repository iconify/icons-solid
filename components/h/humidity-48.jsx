import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khymdnb6j.css';
import '../../css/z/zjys3ecwv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="khymdnb6j"/><path class="zjys3ecwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:humidity-48"} {...others} />);
}

export default Component;
