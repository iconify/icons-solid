import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-2mylbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-2mylbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-rightbar-open-line"} {...others} />);
}

export default Component;
