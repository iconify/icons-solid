import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu2ffabve.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bu2ffabve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bluetooth-off"} {...others} />);
}

export default Component;
