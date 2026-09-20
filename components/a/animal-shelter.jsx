import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8k9kvo-b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="x8k9kvo-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:animal-shelter"} {...others} />);
}

export default Component;
