import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c76_bpbtr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="c76_bpbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:media"} {...others} />);
}

export default Component;
