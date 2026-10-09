import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fve4swbro.css';
import '../../css/o/os335z1oi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fve4swbro"/><path class="os335z1oi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sticky-note-20"} {...others} />);
}

export default Component;
