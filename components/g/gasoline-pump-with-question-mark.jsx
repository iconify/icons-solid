import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srr1b7b0v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="srr1b7b0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gasoline-pump-with-question-mark"} {...others} />);
}

export default Component;
