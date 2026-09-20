import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnxtpfsch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qnxtpfsch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:save-fill"} {...others} />);
}

export default Component;
