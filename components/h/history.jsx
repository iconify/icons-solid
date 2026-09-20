import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekry2eb0h.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ekry2eb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:history"} {...others} />);
}

export default Component;
