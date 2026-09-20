import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx-9cq0ex.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fx-9cq0ex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:manhole-cover"} {...others} />);
}

export default Component;
