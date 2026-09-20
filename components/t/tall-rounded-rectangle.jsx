import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrtq-8b3o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jrtq-8b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tall-rounded-rectangle"} {...others} />);
}

export default Component;
