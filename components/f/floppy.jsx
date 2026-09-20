import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5o_g32uc.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="h5o_g32uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:floppy"} {...others} />);
}

export default Component;
