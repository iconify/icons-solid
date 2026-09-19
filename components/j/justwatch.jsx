import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz-u7oa-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oz-u7oa-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:justwatch"} {...others} />);
}

export default Component;
