import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwhnzx77j.css';
import '../../css/f/fu0uu6tgt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gwhnzx77j"/><path class="fu0uu6tgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:croissant-48"} {...others} />);
}

export default Component;
