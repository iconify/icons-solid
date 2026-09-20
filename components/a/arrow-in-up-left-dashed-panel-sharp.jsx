import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idq-hxb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idq-hxb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-up-left-dashed-panel-sharp"} {...others} />);
}

export default Component;
