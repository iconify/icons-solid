import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qoo1b6bww.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qoo1b6bww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:coffeescript"} {...others} />);
}

export default Component;
