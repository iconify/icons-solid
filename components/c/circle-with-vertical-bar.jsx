import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg7k6vike.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bg7k6vike"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:circle-with-vertical-bar"} {...others} />);
}

export default Component;
