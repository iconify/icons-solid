import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0hof8b7k.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="j0hof8b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rotate-left-fill"} {...others} />);
}

export default Component;
