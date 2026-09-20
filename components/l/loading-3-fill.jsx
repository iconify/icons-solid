import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2jo_5btr.css';
import '../../css/m/muf1bphxu.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="f2jo_5btr"/><path class="muf1bphxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:loading-3-fill"} {...others} />);
}

export default Component;
