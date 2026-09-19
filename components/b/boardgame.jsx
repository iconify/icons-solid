import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqtmd9bae.css';

const viewBox = {"width":640,"height":1024};
const content = `<path class="xqtmd9bae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:boardgame"} {...others} />);
}

export default Component;
