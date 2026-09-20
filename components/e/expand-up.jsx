import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvhqw7b-k.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vvhqw7b-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:expand-up"} {...others} />);
}

export default Component;
