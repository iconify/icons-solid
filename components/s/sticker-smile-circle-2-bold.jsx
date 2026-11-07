import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mms9xzmvs.css';
import '../../css/a/a2h-5ubrv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mms9xzmvs"/><path clip-rule="evenodd" class="a2h-5ubrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-circle-2-bold"} {...others} />);
}

export default Component;
