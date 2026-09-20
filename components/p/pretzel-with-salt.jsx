import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd4ui224u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pd4ui224u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pretzel-with-salt"} {...others} />);
}

export default Component;
