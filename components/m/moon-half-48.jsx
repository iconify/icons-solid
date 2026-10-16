import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu_zzgnel.css';
import '../../css/y/ya6awqbqs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vu_zzgnel"/><path class="ya6awqbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-half-48"} {...others} />);
}

export default Component;
