import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nug-zsezx.css';

const viewBox = {"width":1025,"height":1026};
const content = `<path class="nug-zsezx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:watermelon"} {...others} />);
}

export default Component;
