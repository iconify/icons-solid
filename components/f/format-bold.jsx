import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3p-x7bjn.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="a3p-x7bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:format-bold"} {...others} />);
}

export default Component;
