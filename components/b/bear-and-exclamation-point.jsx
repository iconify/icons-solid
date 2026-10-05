import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o36b4-bki.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o36b4-bki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bear-and-exclamation-point"} {...others} />);
}

export default Component;
