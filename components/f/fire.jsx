import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7e5m7b_o.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="g7e5m7b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:fire"} {...others} />);
}

export default Component;
