import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq6yr4kct.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="eq6yr4kct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:doc-chart"} {...others} />);
}

export default Component;
