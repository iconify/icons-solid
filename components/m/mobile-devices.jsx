import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbqaj9bwr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jbqaj9bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:mobile-devices"} {...others} />);
}

export default Component;
