import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd82bremd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sd82bremd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:chevron-right"} {...others} />);
}

export default Component;
