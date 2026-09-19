import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bce-cpbhl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bce-cpbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:team-downgrade"} {...others} />);
}

export default Component;
