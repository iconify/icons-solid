import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr6pc4b1a.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="zr6pc4b1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:diagonal-cross-small"} {...others} />);
}

export default Component;
