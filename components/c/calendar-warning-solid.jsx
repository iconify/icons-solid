import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzho5zdvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qzho5zdvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:calendar-warning-solid"} {...others} />);
}

export default Component;
