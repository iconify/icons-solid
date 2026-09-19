import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6q6ugetu.css';

const viewBox = {"width":480,"height":448};
const content = `<path class="n6q6ugetu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:quote"} {...others} />);
}

export default Component;
