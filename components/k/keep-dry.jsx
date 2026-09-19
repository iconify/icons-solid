import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yluilwbrm.css';
import '../../css/t/tjuixfu3a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yluilwbrm"/><path class="tjuixfu3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:keep-dry"} {...others} />);
}

export default Component;
