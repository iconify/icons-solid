import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kury_foqf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kury_foqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:attention-solid-sm"} {...others} />);
}

export default Component;
