import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1-u_94fg.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="x1-u_94fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:superscript-solid"} {...others} />);
}

export default Component;
