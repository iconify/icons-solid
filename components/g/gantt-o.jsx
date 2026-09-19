import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbd9-edzm.css';

const viewBox = {"width":1920,"height":1600};
const content = `<path class="bbd9-edzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:gantt-o"} {...others} />);
}

export default Component;
