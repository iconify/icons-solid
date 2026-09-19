import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4b4ymh5n.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="o4b4ymh5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:creative-commons-zero"} {...others} />);
}

export default Component;
