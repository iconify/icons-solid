import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl9_9nr_j.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hl9_9nr_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:preset-16"} {...others} />);
}

export default Component;
