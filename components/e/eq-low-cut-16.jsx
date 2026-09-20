import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs6jyqhex.css';
import '../../css/f/f6s9xdlma.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gs6jyqhex"/><path class="f6s9xdlma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eq-low-cut-16"} {...others} />);
}

export default Component;
