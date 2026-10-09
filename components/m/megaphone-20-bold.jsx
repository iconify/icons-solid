import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjbwlsbfm.css';
import '../../css/m/mdtq3-bqo.css';
import '../../css/l/l7fvvsb1r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jjbwlsbfm"/><path class="mdtq3-bqo"/><path class="l7fvvsb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:megaphone-20-bold"} {...others} />);
}

export default Component;
