import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a10be2bti.css';
import '../../css/t/tpknrjtqz.css';
import '../../css/e/e_jwy8bcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a10be2bti"/><path class="tpknrjtqz"/><path clip-rule="evenodd" class="e_jwy8bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:videocamera-record-bold-duotone"} {...others} />);
}

export default Component;
