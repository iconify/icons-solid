import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb7y2j2ac.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="zb7y2j2ac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:repeat-single-remix"} {...others} />);
}

export default Component;
