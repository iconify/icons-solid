import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x99r71mke.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x99r71mke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:mail4"} {...others} />);
}

export default Component;
