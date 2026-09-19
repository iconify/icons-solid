import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joc0uylro.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="joc0uylro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:coffee-cup"} {...others} />);
}

export default Component;
