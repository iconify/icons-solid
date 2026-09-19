import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln5b_cbqu.css';

const viewBox = {"width":1027,"height":1026};
const content = `<path class="ln5b_cbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:rorschach"} {...others} />);
}

export default Component;
