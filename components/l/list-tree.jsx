import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zsb-q4fqw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zsb-q4fqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:list-tree"} {...others} />);
}

export default Component;
