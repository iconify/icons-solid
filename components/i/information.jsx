import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8tex2cnk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n8tex2cnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:information"} {...others} />);
}

export default Component;
