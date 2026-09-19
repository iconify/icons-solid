import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnqtz66sz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="hnqtz66sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-forrst"} {...others} />);
}

export default Component;
