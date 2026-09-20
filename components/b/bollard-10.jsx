import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1qxmdatg.css';

const viewBox = {"width":10,"height":10};
const content = `<path class="g1qxmdatg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:bollard-10"} {...others} />);
}

export default Component;
