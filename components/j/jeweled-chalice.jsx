import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej3np33fg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ej3np33fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:jeweled-chalice"} {...others} />);
}

export default Component;
