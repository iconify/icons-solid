import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxng2-aly.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="bxng2-aly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:folder-add"} {...others} />);
}

export default Component;
