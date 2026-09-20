import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abjqn5hlt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="abjqn5hlt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-right-to-rectangle-tall-outline"} {...others} />);
}

export default Component;
