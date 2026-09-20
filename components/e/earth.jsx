import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivg8c9bmh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ivg8c9bmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:earth"} {...others} />);
}

export default Component;
