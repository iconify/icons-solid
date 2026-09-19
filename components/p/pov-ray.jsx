import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv8vgf7uy.css';

const viewBox = {"width":371,"height":512};
const content = `<path class="rv8vgf7uy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:pov-ray"} {...others} />);
}

export default Component;
