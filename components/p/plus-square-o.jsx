import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6nlq522g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r6nlq522g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:plus-square-o"} {...others} />);
}

export default Component;
